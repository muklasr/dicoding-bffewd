function sum(...numbers) {
  var result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result;
}

console.log(sum(1, 2, 3, 4, 5));

/* output
15
*/

const refrigerator = ["Samsung", 50, 2, "milk", "cheese", "egg", "butter"];

const [manufacture, weight, door, ...items] = refrigerator;

console.log(manufacture);
console.log(weight);
console.log(door);
console.log(items);

/* output:
Samsung
50
2
[ 'milk', 'cheese', 'egg', 'butter' ]
*/
