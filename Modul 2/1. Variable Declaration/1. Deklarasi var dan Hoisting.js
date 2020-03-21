/* --------------------------------------------------------------------------------------------
Hoisting adalah proses pengangkatan deklarasi variabel menjadi tingkatan atas fungsi.
Variabel yang dideklarasikan dengan var akan mengalami hoisting.
*/

function makeTea(isCold) {
  if (isCold) {
    var tea = "Make an Ice Tea!";
  } else {
    var tea = "Make a Hot Tea!";
  }
  return tea;
}

console.log(makeTea(false));

/* ------------------
Output
Make a Hot Tea!
---------------------
Fungsi diatas tetap dapat mengembalikan nilai dari variabel tea meskipun dideklarasikan di dalam if
*/

//contoh lain
function getFood() {
  food = "choocolate";
  console.log(food);
  var food;
}

getFood();

/* ------------------
Output
choocolate
---------------------
Tidak ada error meskipun variabel food dideklarasikan diakhir
*/
