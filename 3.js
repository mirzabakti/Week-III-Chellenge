// Note:
// Dilarang menggunakan build-in function
// Diperbolehkan menggunakan converter string, push, pop, unshift, dan shift

function sorting(array) {
  // function ini akan mengembalikan sekumpulan number, string, dan boolean yang bernilai truly dan terurut secara naik (A-Z)
  // your code here

  // ALGORITMA
  // memisah isi dalam array (looping)
  // deteksi truly
  // deteksi tipe data, lalu kumpulkan
  // urutkan kecil ke besar
  
  const number = [],
        string = [],
        boolean = [],
        result = [];

  for (let i = 0; i < array.length; i++) { // looping argument
    if (typeof array[i] === 'number' && !Number.isNaN(array[i])) { // mengelompokkan tipe data number
      number.push(array[i])
    } else if (typeof array[i] === 'string') { // mengelompokkan tipe data string
      string.push(array[i])
    } else if (typeof array[i] === 'boolean') { // mengelompokkan tipe data boolean
      boolean.push(array[i])
    }                                                                                                        
  }

  result.push(valueSorting(number),
              valueSorting(string),
              valueSorting(boolean));
  return result;
  };

  function valueSorting(newArray) { // fungsi untuk mengurutkan nilai dari kecil ke besar
    for (let i = 0; i < newArray.length; i++) { // looping newArray
        for (let j = 0; j < newArray.length; j++) { // looping index newArray
            if (newArray[j] > newArray[j + 1]) { // jika index newArray lebih besar dari index newArray selanjutnya
                let nextItem = newArray[j]; // inisiasi variable nextItem dengan index newAray
                newArray[j] = newArray[j + 1]; // index newArray sama dengan index newArray selanjutnya
                newArray[j + 1] = nextItem; // index newArray selanjutnya sama dengan nextItem
            }
        }
    }
    return newArray;
};



// TEST CASES
console.log(sorting([1, 3, 'array', -45, true, false, 'big']));
// [ [ -45, 1, 3 ], [ 'array', 'big' ], [ false, true ] ]
console.log(
  sorting([undefined, null, 456, 'def', NaN, [], true, 123, 'bcd', false])
);
//[ [ 123, 456 ], [ 'bcd', 'def' ], [ false, true ] ]
