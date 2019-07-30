// import { groceristar, chickenKyiv, showcase, gsLoopback } from "@groceristar/groceristar-fetch";
import axios from 'axios'

// const URL = 'https://grocerylists-fake-api.herokuapp.com';
const URL = 'http://localhost:4000';

async function getResponse(route) {
  let response;
  try {
    response =  await axios.get(URL + route);
    console.log("Respons");
    console.log(response);
  } catch (error) {
    console.error(error);
  }
  return response;
}

function getGroceryById( id ) {
  return getResponse("/gs/get-grocery-by-id/" + id)
}

function getFullGrocery( name ) {
  return getResponse("/gs/get-full-grocery/" + name)
}

function getGroceryCollection(){
  return getResponse("/sh/get-grocery-collection")
}

function getAllGrocery(){
  return getResponse("/gs/get-all-grocery")
}


function getGroceryDataFromId(id){
  return getResponse("/gs/get-grocery-data-from-id/" + id)
}


//-----

// function getGroceryCollection(){
//   return showcase.getGroceryShowcase();
// }

//----------
// @TODO remove fetch doesn't work
// function getRandomRecipe(){
//   return chickenKyiv.getRandomRecipe()
// }
//
function getFirstFiveRecipes(){
  return getResponse("/ck/get-first-five-recipes")
}
//
//
// function getFiveRandomIngredients(){
//   return chickenKyiv.getFiveRandomIngredients();
// }
//
// //@TODO i don't like this name too
// function getRecipeChickenKyivById(id) {
//   return chickenKyiv.getRecipe()[id];
// }


// @TODO remove fetch doesn't work
// // GS Loopback
// function getUltimateGrocery(){
//   return gsLoopback.getUltimateGrocery();
// };
//
// function getGLwithUserRelations(){
//   return gsLoopback.getGLwithUserRelations();
// };
//
// function getIngredientsSampleFromDB(){
//   return gsLoopback.getIngredientsSampleFromDB();
// };
//
// function getGroceriesKey(){
//   console.log(groceristar.getGroceriesWithDepIngKey());
//   return groceristar.getGroceriesWithDepIngKey();
// };

export {
  getGroceryById,
  getFullGrocery,
  getGroceryDataFromId,
  getGroceryCollection,
  getAllGrocery,

  // getRandomRecipe,
  getFirstFiveRecipes,
  // getFiveRandomIngredients,
  // getRecipeChickenKyivById,


  // getUltimateGrocery,
  // getGLwithUserRelations,
  // getIngredientsSampleFromDB,
  // getGroceriesKey,

}
