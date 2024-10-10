const { Category, Ingredient } = require('../../models/Index');
const { Op } = require('sequelize');  

// 카테고리 선택 페이지 렌더링
exports.main = (req, res) => {
    res.render('category'); // category.ejs 페이지 렌더링
};

// 모든 카테고리 가져오기
exports.getAllCategories = async (req, res) => {
    try {
        const categories = await Category.findAll();
        if (!categories.length) {
            return res.status(200).json({ message: '카테고리가 없습니다.' });
        }
        res.json(categories);
    } catch (error) {
        console.error('Error fetching categories:', error);
        res.status(500).json({ error: 'Failed to fetch categories' });
    }
};


// 특정 카테고리의 모든 재료 가져오기
exports.getIngredientsByCategory = async (req, res) => {
    try {
        const { categoryID } = req.params;
        // categoryID 유효성 검사
        if (!categoryID) {
            return res.status(400).json({ error: '카테고리 ID가 필요합니다.' });
        }
        
        const ingredients = await Ingredient.findAll({ where: { categoryID } });
        if (!ingredients.length) {
            return res.status(200).json({ message: '해당 카테고리에 재료가 없습니다.' });
        }

        res.json(ingredients);
    } catch (error) {
        console.error('Error fetching ingredients:', error);
        res.status(500).json({ error: 'Failed to fetch ingredients' });
    }
};


// 카테고리 목록 추가 페이지 랜더링
exports.categoriesPlus = (req, res) => {
    res.render('categoriesPlus'); 
};

// 카테고리 목록 추가 
exports.addCategory = async (req, res) => {
    const { categoryName } = req.body;

    // categoryName 유효성 검사
    if (!categoryName || categoryName.trim() === '') {
        return res.status(400).json({ error: '카테고리 이름이 필요합니다.' });
    }

    try {
        // 중복된 카테고리 확인
        const existingCategory = await Category.findOne({ where: { categoryName } });
        if (existingCategory) {
            return res.status(400).json({ error: '이미 존재하는 카테고리입니다.' });
        }

        // 카테고리 추가
        await Category.create({ categoryName });
        res.status(200).json({ message: '카테고리 추가 성공' });
    } catch (error) {
        console.error('Error adding category:', error);
        res.status(500).send('카테고리 추가 중 오류가 발생했습니다.');
    }
};

//재료 목록 추가 페이지 랜더링
exports.ingredientsPlus = (req, res) => {

    res.render('ingredientsPlus');
};




// 재료 추가 함수
exports.addIngredient = async (req, res) => {
    const { categoryID, ingredientName } = req.body;

    // categoryID 및 ingredientName 유효성 검사
    if (!categoryID || !ingredientName || ingredientName.trim() === '') {
        return res.status(400).json({ error: '카테고리 ID와 재료 이름이 필요합니다.' });
    }

    try {
        // 중복된 재료 확인
        const existingIngredient = await Ingredient.findOne({ where: { categoryID, ingredientName } });
        if (existingIngredient) {
            return res.status(400).json({ error: '이미 존재하는 재료입니다.' });
        }

        // 재료 추가
        await Ingredient.create({ categoryID, ingredientName });
        res.status(200).json({ message: '재료 추가 성공' });
    } catch (error) {
        console.error('Error adding ingredient:', error);
        res.status(500).json({ message: '재료 추가 중 오류가 발생했습니다.' });
    }
};



// 재료 이름으로 재료 검색
exports.searchIngredient = async (req, res) => {
    const { name } = req.query;
    console.log("name > ", name);
    
    if (!name) {
        return res.status(400).json({ error: '재료 이름이 필요합니다.' });
    }

    try {
        const ingredient = await Ingredient.findOne({ 
            where: { 
                ingredientName: { [Op.like]: `%${name}%` } // 부분적으로 일치하는 재료 이름 찾기
            } 
        });
        
        if (!ingredient) {
            return res.status(404).json({ message: '재료를 찾을 수 없습니다.' });
        }

        res.json({
            ingredientID: ingredient.ingredientID,
            categoryID: ingredient.categoryID
        });
    } catch (error) {
        console.error('Error searching ingredient:', error);
        res.status(500).json({ error: '재료 검색 중 오류가 발생했습니다.' });
    }
};
