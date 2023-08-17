// https://school.programmers.co.kr/learn/courses/30/lessons/178871

function solution(players, callings) {
  var answer = [];
  callings.forEach((value) => {
    const index = players.indexOf(value);
    const before = players[index - 1]; // poe
    const after = players[index];
    players[index] = before;
    players[index - 1] = after;
  });
  return players;
}

// 시간 초과가 되는디...?
