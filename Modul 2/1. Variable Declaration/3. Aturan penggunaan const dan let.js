/* --------------------------------------------------------------------------------------------
Persamaan const dan let
let atau const tidak dapat di deklarasikan ulang pada cakupan yang sama
*/

//const
const const_name0 = "John";
const const_name0 = "Doe";

console.log(const_name0);

/* output:
SyntaxError: Identifier 'const_name0' has already been declared
*/

//let
let let_name0 = "John";
let let_name0 = "Doe";

console.log(let_name0);

/* error:
SyntaxError: Identifier 'let_name0' has already been declared
*/

/* --------------------------------------------------------------------------------------------
Perbedaan let dan cost
let dapat diinisialisasi ulang nilainya
const tidak dapat diinisialisasi ulang nilainya
*/

//let
let let_name1 = "John";
let_name1 = "Doe";

console.log(let_name1);

/* output:
Doe
*/

//const
const const_name1 = "John";
const_name1 = "Doe";

console.log(const_name1);

/* error:
TypeError: Assignment to constant variable.
*/

/* --------------------------------------------------------------------------------------------
mengubah tidak sama dengan menginisialisasikan ulang
*/

//menginisialisasikan ulang pada array
const fruits0 = ["apple", "orange"];
fruits0 = ["apple", "orange", "banana"];

console.log(fruits0);

/* output
TypeError: Assignment to constant variable. */

//menginisialisasikan ulang pada object
const people0 = { name: "John", age: 18 };
people1 = { name: "John", age: 18, regency: "Bandung" };

console.log(people1);

/* TypeError: Assignment to constant variable. */

//mengubah pada array
const fruits1 = ["apple", "orange"];
fruits1.push("banana");

console.log(fruits1);

/* output
[ 'apple', 'orange', 'banana' ] 
*/

//mengubah pada object
const people1 = { name: "John", age: 18 };

people1.regency = "Bandung";

console.log(people1);

/* output
  { name: 'John', age: 18, regency: 'Bandung' }
*/
