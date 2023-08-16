function solution(slice, n) {
  var answer = 0;
  answer = n % slice === 0 ? n / slice : parseInt(n / slice) + 1;
  return answer;
}
