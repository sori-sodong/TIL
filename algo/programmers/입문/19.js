function solution(my_string, n) {
  var answer = '';
  my_string.split('').forEach((value) => {
    for (let i = 0; i < n; i++) {
      answer += value;
    }
  });
  return answer;
}

// function solution(my_string, n) {
//     var answer = [...my_string].map(v => v.repeat(n)).join("");
//     console.log(answer);
//     return answer;
// }
