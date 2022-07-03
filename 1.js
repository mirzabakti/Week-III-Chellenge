// Note:
// Dilarang menggunakan build-in function
// Diperbolehkan menggunakan converter string, push, pop, unshift, dan shift

function switchString(string) {
  // Fungsi ini akan mengembalikan string yang diterima menjadi kebalikannya.
  // your code here

  // ALGORITMA
  // memisah karakter (looping)
  // deteksi uppercase / lowercase
  // to uppercase / lowercase
  // menggabungkan karakter (result +=)

  let result = "";

  for (let i = 0; i < string.length; i++) { // looping argument
    // nested ternary
    string[i] == string[i].toUpperCase() ? result += string[i].toLowerCase() : // jika huruf adalah huruf besar, ubah jadi huruf kecil
    (string[i] == string[i].toLowerCase()) ? result += string[i].toUpperCase() : null; // jika huruf adalah huruf kecil, ubah jadi huruf besar. selain itu, null
  }
  return result;
}


// TEST CASES
console.log(switchString('Hello World')); // "hELLO wORLD"
console.log(switchString('I aM TIGER')); // "i Am tiger"
console.log(switchString('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(switchString('IT sHOULD bE me')); // "it Should Be ME"
console.log(switchString('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"

