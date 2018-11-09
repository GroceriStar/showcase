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
  console.log(groceriStar)

  return groceriStar.getGroceryShowcase();
}
// getGroceryShowcase
// getGroceryById
// getGroceryByNameWithDepAndIng

export { getGroceryById, getFullGrocery, getGroceryCollection }
