function solution(nums) {
  let answer = 0;
  let halfed = nums.length / 2;
  let noDuplicate = new Set(nums).size;
  if (halfed < noDuplicate) {
    answer = halfed;
  } else {
    answer = noDuplicate;
  }
  return answer;
}
console.log(solution([3, 1, 2, 3])); // 2
console.log(solution([3, 3, 3, 2, 2, 2])); //2
