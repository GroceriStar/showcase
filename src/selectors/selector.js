import { groceristar, chickenKyiv, showcase, gsLoopback } from "@groceristar/groceristar-fetch";


function getGroceryById( id ) {
  return groceristar.getGroceryById(id);
}

function getFullGrocery( name ) {
  return groceristar.getGroceryByNameWithDepAndIng(name);
}

function getGroceryCollection(){
  return showcase.getGroceryShowcase();
}

function getAllGrocery(){
  return groceristar.getAllGrocery();
}


function getGroceryDataFromId(id){

  console.log(getGroceryById(id));
  let grocery     = getGroceryById(id)[0];
  let groceryName = grocery.name;
  let groceryWithDepAndIng = getFullGrocery(groceryName);
  return {
    'name': groceryName,
    'items': groceryWithDepAndIng
  };
}


//----------

function getRandomRecipe(){
  return chickenKyiv.getRandomRecipe()
}

function getFirstFiveRecipes(){
  return chickenKyiv.getFirstFiveRecipes();
}


function getShowcaseFiveRecipes(){
  return chickenKyiv.getShowcaseFiveRecipes();
}


function getFiveRandomIngredients(){
  return chickenKyiv.getFiveRandomIngredients();
}

//@TODO i don't like this name too
function getRecipeChickenKyivById(id) {
  return chickenKyiv.getRecipe()[id];
}

// GS Loopback
function getUltimateGrocery(){
  return gsLoopback.getUltimateGrocery();
};

function getGLwithUserRelations(){
  return gsLoopback.getGLwithUserRelations();
};

function getIngredientsSampleFromDB(){
  return gsLoopback.getIngredientsSampleFromDB();
};

export {
  getGroceryById,
  getFullGrocery,
  getGroceryDataFromId,
  getGroceryCollection,
  getAllGrocery,

  getRandomRecipe,
  getFirstFiveRecipes,
  getFiveRandomIngredients,
  getRecipeChickenKyivById,
  getShowcaseFiveRecipes,

  getUltimateGrocery,
  getGLwithUserRelations,
  getIngredientsSampleFromDB

}
