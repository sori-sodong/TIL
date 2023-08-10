function solution(array) {
  // array=[0,1,0]
  var answer = array.sort((a, b) => b - a)[(array.length - 1) / 2];
  return answer;
}
