const word = "I Love You";
function reverseWord(upperWord, lowerWord) {
  const revLowerCase = [...lowerWord].reverse();
  const revUpperCase = [...upperWord].reverse();
  return [revLowerCase, revUpperCase];
}

function wordToArray(word) {
  let wordArrays = word.split("");
  return wordArrays;
}

function checkVaccumCase(wordArrays) {
  wordArrays.forEach((item, index) => {
    if (item === " ") {
      wordArrays[index] = " ";
    }
  });
}

function checkLowerCase(wordArrays, revLowerCase, lowerWord) {
  wordArrays.forEach((item, index) => {
    if (item !== " " && item.toLowerCase() === item) {
      let wordLowerIndex = lowerWord.indexOf(item);
      wordArrays[index] = revLowerCase[wordLowerIndex];
    }
  });
}
function checkUpperCase(wordArrays, revUpperCase, upperWord) {
  wordArrays.forEach((item, index) => {
    if (item !== " " && item.toUpperCase() === item) {
      let wordUpperIndex = upperWord.indexOf(item);
      wordArrays[index] = revUpperCase[wordUpperIndex];
      //대문자찾기
    }
  });
}
function arrayToString(wordArrays) {
  const answer = wordArrays.join("");
  return answer;
}

function problem4(word) {
  const reverseWordArray = reverseWord(upperWord, lowerWord);
  let wordArrays = wordToArray(word);
  checkLowerCase(wordArrays, reverseWordArray[0], lowerWord);
  checkUpperCase(wordArrays, reverseWordArray[1], upperWord);
  checkVaccumCase(wordArrays);
  const answer = arrayToString(wordArrays);
  return answer;
}
problem4(word);
