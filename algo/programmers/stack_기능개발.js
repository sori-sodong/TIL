function solution(progresses, speeds) {
  var answer = [];
  let de = 0;

  while (progresses.length > 0) {
    for (let i = 0; i < progresses.length; i++) {
      progresses[i] += speeds[i];
    }

    while (true) {
      if (progresses[0] >= 100) {
        de = de + 1;
        progresses.shift();
        speeds.shift();
      } else {
        if (de !== 0) {
          answer.push(de);
        }
        de = 0;
        break;
      }
    }
  }
  return answer;
}
