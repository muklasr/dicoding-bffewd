/* --------------------------------------------------------------------------------------------
let dan const memiliki cakupan yang berbeda dengan var
cakupan dari let dan const adalah block, bukan fungsi
*/

function makeTea(isCold) {
    if(isCold) {
        let tea = "Make an Ice Tea!"
    } else {
        let tea = "Make a Hot Tea!"
    }
    return tea;
 }
  
 console.log(makeTea(false));
  
/* ------------------
Output
 ReferenceError: tea is not defined
---------------------
 */

 //contoh lain
 function getFood() {
    food = "choocolate";
    console.log(food);
    let food;
}
 
getFood();
 
/* ------------------
Error:
ReferenceError: food is not defined
---------------------
Error karena diinisialisasikan dulu sebelum dideklarasikan
*/