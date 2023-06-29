//해시 전화번호 목록

function solution(phone_book) {
  const hashMap = {};

  for (let phoneNumber of phone_book) {
    hashMap[phoneNumber] = 1;
  }

  for (let phoneNumber of phone_book) {
    let temp = '';
    const phoneNumberWithoutSpace = phoneNumber.replace(/\s/g, '');

    for (let number of phoneNumberWithoutSpace) {
      temp += number;

      if (hashMap[temp] && temp != phoneNumberWithoutSpace) {
        return false;
      }
    }
  }

  return true;
}
