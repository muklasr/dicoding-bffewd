const favorites0 = ["Seafood", "Salad", "Nugget", "Soup"];

console.log(favorites0);

/* output:
[ 'Seafood', 'Salad', 'Nugget', 'Soup' ]
*/

const favorites1 = ["Seafood", "Salad", "Nugget", "Soup"];

console.log(...favorites1);

/* output:
Seafood Salad Nugget Soup
*/

/* Math.max() -> Mencari nilai terbesar */
const numbers = [12, 32, 90, 12, 32];

// Sama seperti kita menuliskan
// console.log(Math.max(numbers[0], numbers[1], numbers[2], numbers[3])

console.log(Math.max(...numbers));
/* output
90
*/

const favorites2 = ["Seafood", "Salad", "Nugget", "Soup"];
const others0 = ["Cake", "Pie", "Donut"];

const allFavorites0 = [favorites2, others0];

console.log(allFavorites0);

/* output:
[[ 'Seafood', 'Salad', 'Nugget', 'Soup' ], [ 'Cake', 'Pie', 'Donut' ]]
*/

const favorites3 = ["Seafood", "Salad", "Nugget", "Soup"];
const others1 = ["Cake", "Pie", "Donut"];

const allFavorites1 = [...favorites3, ...others1];

console.log(allFavorites1);

/* output:
[ 'Seafood', 'Salad', 'Nugget', 'Soup', 'Cake', 'Pie', 'Donut' ]
*/
