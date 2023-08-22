function solution(my_string, letter) {
  var answer = '';
  answer = my_string.replaceAll(letter, '');
  return answer;
}

// function solution(my_string, letter) {
//     const answer = my_string.split(letter).join('')
//     return answer;
// }
