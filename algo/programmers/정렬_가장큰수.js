function solution(numbers) {
  var answer = '';

  numbers = numbers.map((e) => String(e));
  numbers.sort((a, b) => {
    if (a + b > b + a) {
      return -1;
    } else if (a + b < b + a) {
      return 1;
    }
  });

  numbers.map((e) => (answer += e));
  if (Number(answer) === 0) {
    answer = '0';
  }
  return answer;
}
