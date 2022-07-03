// Note:
// Dilarang menggunakan build-in function
// Diperbolehkan menggunakan converter string, push, pop, unshift, dan shift

function filter(array) {
  // Function ini akan mengembalikan resep sesuai dengan permintaan
  const recipes = [
    ['Dimsum', 'Udang', 'Ayam', 'Kepiting'],
    ['Ayam Geprek', 'Ayam', 'Sambal', 'Bawang'],
    ['Chicken Katsu', 'Ayam', 'Tepung Roti', 'Terigu'],
    ['Kebab', 'Daging Sapi', 'Tortilla'],
    ['Bakso', 'Daging Sapi', 'Terigu'],
  ];
  // your code here
  const requestRecipes = [];

  // ALGORITMA
  // pisahkan array recipes (looping)
  // pisahkan index dalam array recipes (looping)
  // deteksi apakah index sama dengan argument
  // jika ya, cetak array recipes tersebut

  for (let i = 0; i < array.length; i++) { // looping argument
    // console.log(array[i]);
    for (let j = 0; j < recipes.length; j++) { // looping array recipes
      // console.log(recipes[j])
      for (let k = 0; k < recipes[j].length; k++) { // looping index array recipes
        // console.log(recipes[j][k]);
        array[i] == recipes[j][k] ? // apakah argument = isi index array recipes?
          requestRecipes.push(recipes[j]) : null; // jika ya, push index array recipes
      }
    }
  }
  return requestRecipes;
}



// TEST CASES
console.log(filter(['Chicken Katsu', 'Kebab', 'Bakso']));
// [
//   [ "Chicken Katsu", "Ayam", "Tepung Roti", "Terigu" ],
//   [ "Kebab", "Daging Sapi", "Tortilla" ],
//   [ "Bakso", "Daging Sapi", "Terigu" ]
// ]
console.log(filter(['Chicken Katsu', 'Mie']));
// [
//   [ "Chicken Katsu", "Ayam", "Tepung Roti", "Terigu" ],
// ]
console.log(filter(['Mie', 'Pangsit']));
// []
