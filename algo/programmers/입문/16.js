function solution(num_list) {
  var answer = [];
  num_list.map((value) => {
    answer.unshift(value);
  });
  return answer;
}
