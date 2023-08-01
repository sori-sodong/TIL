var a = [1, 2, 3, 4];
var b = a.pop();
console.log(b); //4
console.log(a); //[1,2,3]

// 1. 읽기 함수와 쓰기 함수로 분리하기
function array_last(array) {
  return array[array.length - 1];
}

function pop(array) {
  array.pop();
}

// 2. 값 두 개를 리턴하는 함수로 만들기
function pop2(array) {
  let array_copy = array.slice();
  let first = array_copy.pop;
  return {
    first: first,
    array: array_copy,
  };
}
