import { groceristar, chickenKyiv, showcase, gsLoopback } from "@groceristar/groceristar-fetch";
import axios from 'axios'

function getGroceryById( id ) {
  return groceristar.getGroceryById(id);
}

function getFullGrocery( name ) {
  return groceristar.getGroceryByNameWithDepAndIng(name);
}

function getGroceryCollection(){
  let result = axios.get('http://127.0.0.1:8004/grocery-collection');
// const result = await getResponse().data;
  console.log("In get Grocery collection");
  console.log(result);
  return result;
}

async function getResponse() {
    let response;
  try {
    let response = await axios.get('http://127.0.0.1:8004/grocery-collection');
    console.log("Respons");
    console.log(response);
  } catch (error) {
    console.error(error);
  }
  return response;
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


//-----

function getGroceryCollection(){
  return showcase.getGroceryShowcase();
}

//----------

function getRandomRecipe(){
  return chickenKyiv.getRandomRecipe()
}

function getFirstFiveRecipes(){
  return chickenKyiv.getFirstFiveRecipes();
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

function getGroceriesKey(){
  console.log(groceristar.getGroceriesWithDepIngKey());
  return groceristar.getGroceriesWithDepIngKey();
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


  getUltimateGrocery,
  getGLwithUserRelations,
  getIngredientsSampleFromDB,
  getGroceriesKey

}
