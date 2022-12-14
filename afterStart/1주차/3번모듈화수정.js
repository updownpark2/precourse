//number를 array형태로 바꾸는함수
function numberToArray(number) {
  let numArray = [];
  let i = 0;

  for (; i <= number; i++) {
    numArray.push(String(i).split(""));
  }

  return numArray;
}
//배열의 원소가 3,6,9일때 count를 높이는 함수
function countClap(numArray) {
  let count = 0;

  numArray.forEach((numArray) =>
    numArray.forEach((num) => {
      if (num === "3" || num === "6" || num === "9") {
        count = count + 1;
      }
    })
  );

  return count;
}

function problem3(number) {
  const numArray = numberToArray(number);
  const answer = countClap(numArray);

  return answer;
}
problem3(number);
