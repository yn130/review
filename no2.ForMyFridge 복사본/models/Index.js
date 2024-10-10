const { Sequelize } = require('sequelize');
const config = require('../config/config.js')[process.env.NODE_ENV || 'development'];
const db = {};

const sequelize = new Sequelize(
    config.database, 
    config.username, 
    config.password, 
    {
        ...config,
        timezone: '+09:00', // 한국 시간으로 설정 > createdAt/updatedAt 필드 위해서
    }
);

// 모델 불러오기
const Category = require('./fridge/Category.js')(sequelize, Sequelize); 
const Ingredient = require('./fridge/Ingredient.js')(sequelize, Sequelize);
const Fridge = require('./fridge/Fridge.js')(sequelize, Sequelize);
const FridgeType = require('./fridge/FridgeType.js')(sequelize, Sequelize);
const FridgeTypeSection = require('./fridge/FridgeTypeSection.js')(sequelize, Sequelize);
const FridgeSection = require('./fridge/FridgeSection.js')(sequelize, Sequelize);
const StorageType = require('./fridge/StorageType.js')(sequelize, Sequelize);

const User = require('./user/User.js')(sequelize, Sequelize); 
const FridgeItem = require('./user/FridgeItem.js')(sequelize, Sequelize);
const UserFridgeMapping = require('./user/UserFridgeMapping.js')(sequelize, Sequelize);

const Subscription = require('./user/Subscription.js')(sequelize, Sequelize);

const Recipe = require('./recipe/Recipes.js')(sequelize, Sequelize);
const RecipeIngredient = require('./recipe/RecipeIngredient.js')(sequelize, Sequelize);
// const YouTubeLink = require('./recipe/YoutubeLink.js')(sequelize, Sequelize);

// 관계 설정

// User <-> Fridge (다대다 관계)
User.belongsToMany(Fridge, {
  through: UserFridgeMapping,
  foreignKey: 'ID',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});
Fridge.belongsToMany(User, {
  through: UserFridgeMapping,
  foreignKey: 'fridgeID',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});

// FridgeType <-> Fridge (1대다 관계)
FridgeType.hasMany(Fridge, {
  foreignKey: 'fridgeTypeID',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});
Fridge.belongsTo(FridgeType, {
  foreignKey: 'fridgeTypeID',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});

// Category <-> Ingredient (1대다 관계)
Category.hasMany(Ingredient, {
  foreignKey: 'categoryID',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});
Ingredient.belongsTo(Category, {
  foreignKey: 'categoryID',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});

// FridgeType <-> FridgeTypeSection (1대다 관계)
FridgeType.hasMany(FridgeTypeSection, {
  foreignKey: 'fridgeTypeID',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});
FridgeTypeSection.belongsTo(FridgeType, {
  foreignKey: 'fridgeTypeID',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});

// StorageType <-> FridgeTypeSection (1대다 관계)
StorageType.hasMany(FridgeTypeSection, {
  foreignKey: 'storageTypeID',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});
FridgeTypeSection.belongsTo(StorageType, {
  foreignKey: 'storageTypeID',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});

// Fridge <-> FridgeSection (1대다 관계)
Fridge.hasMany(FridgeSection, {
  foreignKey: 'fridgeID',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});
FridgeSection.belongsTo(Fridge, {
  foreignKey: 'fridgeID',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});

// StorageType <-> FridgeSection (1대다 관계)
StorageType.hasMany(FridgeSection, {
  foreignKey: 'storageTypeID',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});
FridgeSection.belongsTo(StorageType, {
  foreignKey: 'storageTypeID',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});

// FridgeSection <-> FridgeItem (1대다 관계)
FridgeSection.hasMany(FridgeItem, {
  foreignKey: 'sectionID',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});
FridgeItem.belongsTo(FridgeSection, {
  foreignKey: 'sectionID',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});

// Ingredient <-> FridgeItem (1대다 관계)
Ingredient.hasMany(FridgeItem, {
  foreignKey: 'ingredientID',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});
FridgeItem.belongsTo(Ingredient, {
  foreignKey: 'ingredientID',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});

// UserFridgeMapping <-> Fridge (1대다 관계)
UserFridgeMapping.belongsTo(Fridge, { 
  foreignKey: 'fridgeID',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});
Fridge.hasMany(UserFridgeMapping, { 
  foreignKey: 'fridgeID',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});

// UserFridgeMapping <-> User (1대다 관계)
UserFridgeMapping.belongsTo(User, { 
  foreignKey: 'ID',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});
User.hasMany(UserFridgeMapping, { 
  foreignKey: 'ID',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});

//User  <-> Subscription (1대1 관계)
User.hasMany(Subscription, {
  foreignKey: 'userID',
  sourceKey: 'ID',
  onDelete: 'CASCADE'
});

Subscription.belongsTo(User, {
  foreignKey: 'userID',
  targetKey: 'ID',
  onDelete: 'CASCADE'
});





// Recipe <-> RecipeIngredient (1대다 관계)
Recipe.hasMany(RecipeIngredient, {
  foreignKey: 'recipeID',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});
RecipeIngredient.belongsTo(Recipe, {
  foreignKey: 'recipeID',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});

// Ingredient <-> RecipeIngredient (1대다 관계)
Ingredient.hasMany(RecipeIngredient, {
  foreignKey: 'ingredientID',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});
RecipeIngredient.belongsTo(Ingredient, {
  foreignKey: 'ingredientID',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});

// // Recipe <-> YouTubeLink (1대다 관계)
// Recipe.hasMany(YouTubeLink, {
//   foreignKey: 'recipeID',
//   onDelete: 'CASCADE',
//   onUpdate: 'CASCADE'
// });
// YouTubeLink.belongsTo(Recipe, {
//   foreignKey: 'recipeID',
//   onDelete: 'CASCADE',
//   onUpdate: 'CASCADE'
// });

// DB 객체에 모델 추가
db.Category = Category;
db.Ingredient = Ingredient;
db.Fridge = Fridge;
db.FridgeType = FridgeType;
db.FridgeTypeSection = FridgeTypeSection;
db.FridgeSection = FridgeSection;
db.StorageType = StorageType;

db.User = User;
db.FridgeItem = FridgeItem;
db.UserFridgeMapping = UserFridgeMapping;

db.Subscription = Subscription;

db.Recipe = Recipe;
db.RecipeIngredient = RecipeIngredient;
// db.YouTubeLink = YouTubeLink;

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
