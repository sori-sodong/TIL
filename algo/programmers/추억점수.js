function solution(name, yearning, photo) {
  var answer = [];
  let nameScore = {};
  name.forEach((n, i) => {
    nameScore[n] = yearning[i];
  });
  photo.forEach((arr, i) => {
    answer[i] = 0;
    arr.forEach((n) => {
      if (nameScore[n] === undefined) answer[i] += 0;
      else answer[i] += Number(nameScore[n]);
    });
  });
  return answer;
}

1;
2;
3;
4;
// function solution(name, yearning, photo) {
//     return photo.map((v)=> v.reduce((a, c)=> a += yearning[name.indexOf(c)] ?? 0, 0))
// }
