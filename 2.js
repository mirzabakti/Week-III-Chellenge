// Note:
// Dilarang menggunakan build-in function

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
