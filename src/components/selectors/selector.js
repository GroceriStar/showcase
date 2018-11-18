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

export { getGroceryById, getFullGrocery, getGroceryCollection }
