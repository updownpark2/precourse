const user = "mrko";
const friends = [
  ["donut", "andole"],
  ["donut", "jun"],
  ["donut", "mrko"],
  ["shakevan", "andole"],
  ["shakevan", "jun"],
  ["shakevan", "mrko"],
];
const visitors = ["bedi", "bedi", "donut", "bedi", "shakevan"];

// user의 친구 찾기 함수
function findUserFriends(friends) {
  let userFriends = [];

  friends.forEach((friend) => {
    if (friend[0] === user) {
      userFriends.push(friend[1]);
    }
    if (friend[1] === user) {
      userFriends.push(friend[0]);
    }
  });

  return userFriends;
}

// user가 직접적으로는 모르는 친구 배열 반환 함수
function findNotUserfriends(friends) {
  const userFriends = findUserFriends(friends);
  let notUserFriends = [];

  friends.forEach((friendsArr) =>
    friendsArr.forEach((friend) => {
      if (
        userFriends.includes(friend) === false &&
        friend !== user &&
        notUserFriends.includes(friend) === false
      ) {
        notUserFriends.push(friend);
      }
    })
  );
  return notUserFriends;
}

//user의 친구의 친구 어레이 찾기

//방문자 중복제거
function deleteDuplicatesVisitorArray(friends, visitors) {
  let visitorsArray = [];
  const userFriends = findUserFriends(friends);

  visitors.forEach((item) => {
    if (
      visitorsArray.includes(item) === false &&
      userFriends.includes(item) === false
    ) {
      visitorsArray.push(item);
    }
  });

  return visitorsArray;
}

// 유저의 친구가 아닌 사람들과 방문자를 묶어주는 함수

function makeCombinedArr(friends, visitors) {
  const notUserFriends = findNotUserfriends(friends);
  const visitorsArray = deleteDuplicatesVisitorArray(friends, visitors);
  let combindedArr = [...notUserFriends, ...visitorsArray];

  return combindedArr;
}

//친구의 친구 점수측정
function checkSoreOfFriendsOfFriends(friends, visitors) {
  const combinedArr = makeCombinedArr(friends, visitors);
  let map = new Map();

  combinedArr.forEach((friend) => {
    let i = 0;
    let count = 10;
    for (; i < friends.length; i++) {
      if (friends[i].includes(friend)) {
        map.set(friend, count);
        count = count + 10;
      }
    }
  });

  return map;
}

// 방문자의 점수측정
function checkSoreOfVisitor(friends, visitors) {
  const combinedArr = makeCombinedArr(friends, visitors);
  let map = checkSoreOfFriendsOfFriends(friends, visitors);

  combinedArr.forEach((friend) => {
    let i = 0;
    let count = 1;

    for (; i < visitors.length; i++) {
      if (visitors[i] === friend) {
        map.set(friend, count);
        count = count + 1;
      }
    }
  });
  return map;
}

//사람과 점수 묶기

//점수가 담긴배열을 받아서 오름차순으로 정돈 후 index5까지 잘라 반환하는함수

function DuplicatedArrayToDesending(array) {
  return array.sort((a, b) => b[1] - a[1]);
}

function problem7(user, friends, visitors) {
  const friendsAndScoreArr = checkSoreOfVisitor(friends, visitors);
  let answerArr = DuplicatedArrayToDesending([...friendsAndScoreArr]);

  const answer = answerArr.map((item, index) => {
    if (item !== 0 && index < 5) {
      return item[0];
    }
  });

  return answer;
}
problem7(user, friends, visitors);
