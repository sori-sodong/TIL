function solution(numbers) {
  var answer = 0;
  numbers.map((v) => {
    answer = answer + v;
  });
  answer = answer / numbers.length;
  return answer;
}
