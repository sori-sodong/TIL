function solution(array) {
  const countObj = {};
  array.forEach((value) => {
    if (!countObj[value]) {
      countObj[value] = 1;
    } else {
      countObj[value] += 1;
    }
  });
  let max = -Infinity,
    answer;
  const idxSet = Object.entries(countObj).map(([key, value]) => {
    return { idx: key, idxCount: value };
  });
  idxSet.sort((a, b) => b.idxCount - a.idxCount);
  return idxSet[0].idxCount === idxSet[1]?.idxCount ? -1 : Number(idxSet[0].idx);
}
