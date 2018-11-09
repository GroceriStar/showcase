import { groceriStar } from "@groceristar/groceristar-fetch";

//  function getDish(randomWeek){
//       return mealCalendar.getDishByWeek(randomWeek);
//   }
//
function getGroceryById( id ) {
  return groceriStar.getGroceryById(id);
}

function getFullGrocery( name ) {
  return groceriStar.getGroceryByNameWithDepAndIng(name);
}

function getGroceryCollection(){
  return groceriStar.getGroceryShowcase();
}

export { getGroceryById, getFullGrocery, getGroceryCollection }
