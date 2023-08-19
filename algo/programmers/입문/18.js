function solution(num_list) {
  var answer = [];
  answer = [0, 0];
  num_list.forEach((value) => {
    if (value % 2 === 0) answer[0]++;
    else answer[1]++;
  });
  return answer;
}
