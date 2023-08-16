function solution(n) {
  var answer = 0;

  function getGreatest(a, b) {
    if (a % b === 0) return b;
    else return getGreatest(b, a % b);
  }
  const greatest = getGreatest(n, 6);
  console.log(n, greatest);
  answer = n / greatest;
  return answer;
}
