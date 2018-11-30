import { groceristar } from "@groceristar/groceristar-fetch";

// console.log(groceristar);

//  function getDish(randomWeek){
//       return mealCalendar.getDishByWeek(randomWeek);
//   }
//
function getGroceryById( id ) {
  return groceristar.getGroceryById(id);
}

function getFullGrocery( name ) {
  return groceristar.getGroceryByNameWithDepAndIng(name);
}

function getGroceryCollection(){
  return groceristar.getGroceryShowcase();
}

function getAllGrocery(){
  return groceristar.getAllGrocery();
}

function getGroceryDataFromId(id){

  console.log(getGroceryById(id));
  let grocery     = getGroceryById(id)[0];
  let groceryName = grocery.name;
  let groceryWithDepAndIng = getFullGrocery(groceryName);
  return groceryWithDepAndIng;
}


export { getGroceryById, getFullGrocery, getGroceryDataFromId, getGroceryCollection, getAllGrocery }
