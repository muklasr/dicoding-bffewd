/* --------------------------------------------------------------------------------------------
Nilai dari array favorites0 dimasukkan ke firstFood0, secondFood0, thirdFood0, fourthFood0 
sesuai dengan posisinya.
*/
const favorites0 = ["Seafood", "Salad", "Nugget", "Soup"];

const [firstFood0, secondFood0, thirdFood0, fourthFood0] = favorites0;

console.log(firstFood0);
console.log(secondFood0);
console.log(thirdFood0);
console.log(fourthFood0);

/* output:
Seafood
Salad
Nugget
Soup
*/

/* --------------------------------------------------------------------------------------------
Menampilkan hanya satu nilai.
*/

const favorites1 = ["Seafood", "Salad", "Nugget", "Soup"];

const [, , thirdFood1] = favorites1;

console.log(thirdFood1);

/* output:
Nugget
*/
