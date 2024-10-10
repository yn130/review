const { UserFridgeMapping, FridgeSection, FridgeItem, Recipe, RecipeIngredient, Ingredient }  = require('../../models/Index');
const { Op } = require('sequelize'); // Sequelize operators
const axios = require('axios');
const YOUTUBE_API_KEY = process.env.YOUTUBE_KEY // 생성한 YouTube API 키


exports.main = (req, res) => {
    res.render('recipe');  
};


// 레시피 추천 
exports.recommendRecipes = async (req, res) => {
    try {
        const userID = req.user.id; // 인증된 유저의 ID 가져오기
        const { limit = 10, offset = 0, excludeRecipes = '' } = req.query;

        // excludeRecipes를 문자열에서 배열로 변환
        const excludeRecipesArray = excludeRecipes ? excludeRecipes.split(',').map(Number) : [];

        // 1. 유저가 소유한 냉장고의 ID 가져오기
        const userFridges = await UserFridgeMapping.findAll({
            where: { ID: userID },
            attributes: ['fridgeID']
        });

        const fridgeIDs = Array.isArray(userFridges) ? userFridges.map(fridge => fridge.fridgeID) : [];

        // 2. 냉장고 ID에 해당하는 섹션 가져오기
        const fridgeSections = await FridgeSection.findAll({
            where: { fridgeID: fridgeIDs },
            attributes: ['sectionID']
        });

        const sectionIDs = Array.isArray(fridgeSections) ? fridgeSections.map(section => section.sectionID) : [];

        // 3. 냉장고 섹션에 저장된 재료들 가져오기 (재료명과 유형 포함)
        const fridgeItems = await FridgeItem.findAll({
            where: { sectionID: sectionIDs },
            include: {
                model: Ingredient,
                attributes: ['ingredientID', 'ingredientName', 'ingredientType']
            }
        });

        const userIngredientIDs = fridgeItems.map(item => item.ingredientID);

        // 4. 모든 레시피와 해당 레시피에 필요한 재료(재료명 및 유형 포함) 가져오기
        const recipes = await Recipe.findAll({
            where: { recipeID: { [Op.notIn]: excludeRecipesArray } }, // 이미 제공된 레시피 제외
            include: {
                model: RecipeIngredient,
                include: {
                    model: Ingredient,
                    attributes: ['ingredientID', 'ingredientName', 'ingredientType']
                }
            }
        });

        // 5. 각 레시피에 대해 유저가 가진 재료와 부족한 재료 구분
        const recipeRecommendations = recipes.map(recipe => {
            const recipeIngredients = recipe.RecipeIngredients.map(ri => ri.Ingredient);

            const ingredientsUserHas = recipeIngredients.filter(ingredient => userIngredientIDs.includes(ingredient.ingredientID));
            const ingredientsUserNeeds = recipeIngredients.filter(ingredient => !userIngredientIDs.includes(ingredient.ingredientID));

            const realIngredientsUserHas = ingredientsUserHas.filter(ingredient => ingredient.ingredientType === 'real');
            const condimentsUserHas = ingredientsUserHas.filter(ingredient => ingredient.ingredientType === 'condiment');
            const realIngredientsUserNeeds = ingredientsUserNeeds.filter(ingredient => ingredient.ingredientType === 'real');
            const condimentsUserNeeds = ingredientsUserNeeds.filter(ingredient => ingredient.ingredientType === 'condiment');

            const totalIngredientsUserHasCount = realIngredientsUserHas.length + condimentsUserHas.length;
            const totalIngredientsUserNeedsCount = realIngredientsUserNeeds.length + condimentsUserNeeds.length;
            const matchRatio = totalIngredientsUserHasCount / recipeIngredients.length;

            return {
                recipeID: recipe.recipeID,
                recipeTitle: recipe.recipeTitle,
                realIngredientsUserHas: realIngredientsUserHas.map(ingredient => ingredient.ingredientName),
                condimentsUserHas: condimentsUserHas.map(ingredient => ingredient.ingredientName),
                realIngredientsUserNeeds: realIngredientsUserNeeds.map(ingredient => ingredient.ingredientName),
                condimentsUserNeeds: condimentsUserNeeds.map(ingredient => ingredient.ingredientName),
                matchRatio,
                totalIngredientsUserNeedsCount,
                totalIngredientsUserHasCount // 추가: 유저가 가진 재료 수
            };
        });

        // 6. 유저가 가지고 있지 않은 재료가 적은 순서로 정렬
        const sortedByFewestMissing = recipeRecommendations
            .sort((a, b) => a.totalIngredientsUserNeedsCount - b.totalIngredientsUserNeedsCount)
            .slice(0, 5); // 유저가 가지고 있지 않은 재료가 적은 레시피 5개

        // 7. 유저가 가지고 있는 재료가 많은 순서로 정렬 (이미 제공된 레시피는 제외)
        const sortedByMostOwned = recipeRecommendations
            .filter(recipe => !sortedByFewestMissing.some(r => r.recipeID === recipe.recipeID)) // 중복 방지
            .sort((a, b) => b.totalIngredientsUserHasCount - a.totalIngredientsUserHasCount)
            .slice(0, 5); // 유저가 가지고 있는 재료가 많은 레시피 5개

        // 8. 두 정렬 결과를 합침
        const combinedRecommendations = [...sortedByFewestMissing, ...sortedByMostOwned];
        const recipeTitles = combinedRecommendations.map(recipe => recipe.recipeTitle);
        console.log('Recommended Recipe Titles:', recipeTitles);


        // 9. 결과 반환
        res.status(200).json(combinedRecommendations);
    } catch (error) {
        console.error('Error recommending recipes:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};



// 레시피 제목과 재료 이름으로 검색
exports.searchRecipes = async (req, res) => {
    try {
        const { query, type } = req.query;
        const userID = req.user.id;

        console.log("query = ", query); // ex) 찜닭
        console.log("type = ", type); // recipeTitle
        

        if (!query) {
            return res.status(400).json({ message: '검색어를 입력해주세요.' });
        } else if (!type) {
            return res.status(400).json({ message: '검색 유형을 선택해주세요.' });
        }

        const formattedQuery = `%${query.trim().replace(/\s+/g, '%')}%`;
        let recipes;

        if (type === 'recipeTitle') {
            // 레시피 제목으로 검색
            recipes = await Recipe.findAll({
                where: {
                    recipeTitle: { [Op.like]: formattedQuery }
                },
                include: {
                    model: RecipeIngredient,
                    include: {
                        model: Ingredient,
                        attributes: ['ingredientID', 'ingredientName', 'ingredientType']
                    }
                }
            });
            console.log("레시피 제목 검색 시 필터링된 레시피 개수:", recipes.length);
            console.log("레시피 제목 검색 시 필터링된  레시피:", recipes.map(recipe => recipe.recipeTitle));

        } else if (type === 'ingredientName') {
                // 재료 이름으로 검색
                recipes = await Recipe.findAll({
                    include: {
                        model: RecipeIngredient,
                        required: true,  // 중요: 반드시 RecipeIngredient가 있는 레시피만 가져옴
                        include: {
                            model: Ingredient,
                            where: {
                                ingredientName: { [Op.like]: formattedQuery } // 필터링된 재료 이름만 검색
                            },
                            attributes: ['ingredientID', 'ingredientName', 'ingredientType']
                        }
                    }
                });
            
                // 각 레시피에 대해 해당하는 모든 재료 목록을 가져옴
                recipes = await Promise.all(recipes.map(async (recipe) => {
                    const fullIngredients = await RecipeIngredient.findAll({
                        where: { recipeID: recipe.recipeID },
                        include: {
                            model: Ingredient,
                            attributes: ['ingredientID', 'ingredientName', 'ingredientType']
                        }
                    });
                    
                    // 레시피의 전체 재료를 포함하여 반환
                    return {
                        ...recipe.toJSON(),
                        RecipeIngredients: fullIngredients
                    };
                }));
            
                console.log("재료 이름 검색 시 필터링된 레시피 개수:", recipes.length);
                console.log("재료 이름 검색 시 필터링된 레시피:", recipes.map(recipe => recipe.recipeTitle));
            }
             else {
            return res.status(400).json({ message: '올바른 검색 유형을 선택하세요.' });
        }

        if (recipes.length === 0) {
            return res.status(404).json({ message: '검색 결과가 없습니다.' });
        }

        const userFridges = await UserFridgeMapping.findAll({
            where: { ID: userID },
            attributes: ['fridgeID']
        });

        const fridgeIDs = userFridges.map(fridge => fridge.fridgeID);

        const fridgeSections = await FridgeSection.findAll({
            where: { fridgeID: fridgeIDs },
            attributes: ['sectionID']
        });

        const sectionIDs = fridgeSections.map(section => section.sectionID);

        const fridgeItems = await FridgeItem.findAll({
            where: { sectionID: sectionIDs },
            include: {
                model: Ingredient,
                attributes: ['ingredientID', 'ingredientName', 'ingredientType']
            }
        });

        const userIngredientIDs = fridgeItems.map(item => item.ingredientID);

        const recipeResults = recipes.map(recipe => {
            const recipeIngredients = recipe.RecipeIngredients.map(ri => ri.Ingredient);

            const ingredientsUserHas = recipeIngredients.filter(ingredient => userIngredientIDs.includes(ingredient.ingredientID));
            const ingredientsUserNeeds = recipeIngredients.filter(ingredient => !userIngredientIDs.includes(ingredient.ingredientID));

            const realIngredientsUserHas = ingredientsUserHas.filter(ingredient => ingredient.ingredientType === 'real');
            const condimentsUserHas = ingredientsUserHas.filter(ingredient => ingredient.ingredientType === 'condiment');
            const realIngredientsUserNeeds = ingredientsUserNeeds.filter(ingredient => ingredient.ingredientType === 'real');
            const condimentsUserNeeds = ingredientsUserNeeds.filter(ingredient => ingredient.ingredientType === 'condiment');

            return {
                recipeID: recipe.recipeID,
                recipeTitle: recipe.recipeTitle,
                recipeDescription: recipe.recipeDescription,
                realIngredientsUserHas: realIngredientsUserHas.map(ingredient => ingredient.ingredientName),
                condimentsUserHas: condimentsUserHas.map(ingredient => ingredient.ingredientName),
                realIngredientsUserNeeds: realIngredientsUserNeeds.map(ingredient => ingredient.ingredientName),
                condimentsUserNeeds: condimentsUserNeeds.map(ingredient => ingredient.ingredientName)
            };
        });

        res.status(200).json(recipeResults);
    } catch (error) {
        console.error('Error searching recipes:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// 레시피 제목으로 조회수 상위 3개의 YouTube 영상 가져오기
async function getTopYouTubeVideos(recipeTitle) {
    try {
        const query = `${recipeTitle} 조리법 OR 만드는 법 OR 레시피 -먹방 -Shorts`;  // 조리법 관련 쿼리, '먹방''Shorts' 제외

        const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                key: YOUTUBE_API_KEY,
                q: query,  // 조리법을 우선적으로 검색
                part: 'snippet',
                type: 'video',
                maxResults: 3,  // 상위 3개의 결과만 가져오기
                order: 'viewCount',  // 조회수 기준으로 정렬
            }
        });

        const videos = response.data.items.map(item => {
            return {
                title: item.snippet.title,
                url: `https://www.youtube.com/watch?v=${item.id.videoId}`
            };
        });

        return videos;  // 상위 3개의 YouTube 링크를 반환
    } catch (error) {
        console.error('Error fetching YouTube videos:', error);
        return [];
    }
}

// 레시피 상세 정보와 함께 YouTube 영상 제공
exports.getRecipeDetails = async (req, res) => {
    const { recipeID } = req.params;
    
    try {
        const recipe = await Recipe.findByPk(recipeID);

        if (!recipe) {
            return res.status(404).json({ message: '레시피를 찾을 수 없습니다.' });
        }

        // 레시피 이름으로 상위 3개의 YouTube 영상 가져오기
        const youtubeVideos = await getTopYouTubeVideos(recipe.recipeTitle);

        // View에 레시피 데이터와 YouTube 영상 데이터 전달
        res.render('recipeDetail', {
            recipe,
            youtubeVideos  // YouTube 링크와 함께 레시피 정보를 렌더링
        });
    } catch (error) {
        console.error('Error fetching recipe details:', error);
        res.status(500).json({ message: '레시피 정보를 불러오는 중 오류가 발생했습니다.' });
    }
};


