// Note:
// Dilarang menggunakan build-in function
// Diperbolehkan menggunakan converter string, push, pop, unshift, dan shift

function sorting(array) {
  // function ini akan mengembalikan sekumpulan number, string, dan boolean yang bernilai truly dan terurut secara naik (A-Z)
  // your code here
}

// TEST CASES
console.log(sorting([1, 3, 'array', -45, true, false, 'big']));
// [ [ -45, 1, 3 ], [ 'array', 'big' ], [ false, true ] ]
console.log(
  sorting([undefined, null, 456, 'def', NaN, [], true, 123, 'bcd', false])
);
//[ [ 123, 456 ], [ 'bcd', 'def' ], [ false, true ] ]
