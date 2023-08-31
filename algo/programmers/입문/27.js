function solution(emergency) {
  var answer = [];
  answer = Array.from({ length: emergency.length }, () => 1);
  for (let i = 0; i < emergency.length - 1; i++) {
    for (let j = i + 1; j < emergency.length; j++) {
      if (emergency[i] < emergency[j]) answer[i]++;
      else answer[j]++;
    }
  }
  return answer;
}
