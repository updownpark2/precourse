# precourse
 우아한테크코스[5기] 프리코스를 수료하며 배운 점 
### 프리코스에서 배울 수 있는 건 다 배워가자..!!📚📚

혼자 학습을 해오다보니 이런 기회가 많지 않았다. 올해는 감사히 모든 신청자에게 프리코스의 기회를 주셨다!!!
_
"오히려조아"😏_

**기대가 된다 빨리 배우고싶다!!**


> 가장 중요한건 기죽지 않고 끝까지 도전하기!! 
나보다 잘하는 사람이 많더라도 
비교말고 내 템포로 끝까지 완료하자!

----

우테코 4시 프론트엔드과정 후기에

**_"일단 쓰레기 코드라도 작성해라!"_**

라는 글을 보았다. 각 미션마다 요구하는 기능이 다르고 이를 기능별로 커밋 해야 하기 때문에 요구사랑을 처음부터 지키려하지말고 일단 만들고 쳐내는 식으로 해보자!!🔥🔥

> **MVC 패턴을 학습해보자 !! 이를 기준으로 모듈화를 한다면 확실한 모듈기준이 생길것이다!**



---


# <span style="color: yellowgreen">코드 컨벤션 연습</span>

코드 컨벤션은 읽고 관리하기 쉬운 코드를 작성하기 위한 코딩 스타일 규약!
(협업 할 때 코드를 읽기 쉽게 만들어주는 하나의 규칙..!)

## 1. 변수와 함수의 이름을 정하기  
### 카멜케이스, 파스칼 표기법, 헝가리안 표기법, 스네이크 표기법

**rocket launch duration**

1. 카멜케이스 => 첫 단어는 소문자로 시작하고 두 번째 단어부터 대문자로 시작한다!
ex =>  roketLaunchDuration

2. 스네이크 표기법 => ex=> roket_launch_duration

3. 파스칼 표기법 => ex => RoketLaunchDuration

**주로 카멜 케이스를 사용한다! (상수 일때만 스네이크 표기법)**

## 2. Const , Let 

### const를 let 보다 위에 선언한다

## 3. 배열과 객체는 반드시 리터럴로 선언한다!

## 4. 모듈 

항상 import와 export를 이용한다.

```
// Best
import {es6} from './AirbnbStyleGuide';
export default es6;
```
import문으로부터 직접 export하지 않는다.

한 줄로 표현되어 간결하기는 하지만, import와 export 하는 방법을 명확하게 구분함으로써 일관성을 유지하자.
```
// Bad
export {es6 as default} from './airbnbStyleGuide';
```

## 5. for문 

키워드와 조건문 사이에 빈칸을 사용한다.
키워드와 조건문 사이가 빼곡하면 코드를 읽기 어렵다.
```
// Bad
var i = 0;
for(;i<100;i+=1) {
  someIterativeFn();
} 

// Good
var i = 0;
for(; i < 100; i+=1) {
  someIterativeFn();
} 
```

반복을 위한 변수를 미리 선언한다

```
// Bad
for (var i = 0; i < array.length; i += 1) ...

// Bad
for (var i in array) ...

// Good
var i, len
for (i = 0, len = array.length; i < len; i += 1) ...

// good
var key;
for (key in object) ...
``` 

 ### 기타 깨알 코드 지식
 
reduce(누적값,현재값) : 누적값을 리턴해 줄 수 있다.
forEach는 return이 먹히지 않는다.
string과 toString은 사실상 같다고 봐도 된다.
toString은 인자를 하나 받는데 이에 따라 숫자의 표현방식이 달라진다 (이진법 십진법 )


참고: https://ui.toast.com/fe-guide/ko_CODING-CONVENTION

## 2주차 미션 MVC모델설계

![8E950DD8-BA8C-4B6F-ABE4-2B206D06FB6E_1_105_c](https://user-images.githubusercontent.com/101778169/200177847-fb5750ff-a599-4451-884e-ddb8e6cea89f.jpg)


## TDD

테스트 코드를 먼저 짜서 기능별로 컴포넌트를 나눠 코드를 구성할때 더 편리하게 한다.
jest를 이용해 코드를 짜보는 경험을 했다. 다른 branch에 있어 아직은 가져오지 못했지만

프리코스가 끝나면 한꺼번에 업로드해야겠다! 

TDD를 지키며 코드를 짜다보니 한 가지 좋은 점은 계속해서 기능목록을 수정할 수 있다는 점이다. 

기능 목록에서 필요한 부분이 계속 추가되고 더 함수를 작게 나눠볼 수 있었다. 이는 후에 컴포넌트별로

코드를 짤 때 유용함으로 작용할 것같다. 

가장 좋은 점은 내가 구현해야하는 기능들을 다시한번 리마인드하면서 구조의 맥락을 더 잘 이해할 수 있다는 점이다.

<테스트 코드 일부>
```js
const MissionUtils = require("@woowacourse/mission-utils");
describe("게임 결과에 따라 유저에게 입력받기", () => {
  test("User로 부터 1과 2중 하나의 입력을 받는 함수 테스트", (done) => {
    function callback() {
      MissionUtils.Console.readLine("1은 재시작 2는 종료입니다", (number) => {
        expect(number).toBe(number);
        done();
      });
    }
    callback();
  });
  test("number를 각 자릿수마다 string으로 변경 후 배열로 묶기 ", () => {
    function numToArr(num) {
      return [...String(num)];
    }
    expect(numToArr(123)).toEqual(["1", "2", "3"]);
  });

  test("유저가 1과 2의 숫자만을 입력했는지 확인", () => {
    function checkNumRange(userNum) {
      if (/^[1-2]*$/g.test(userNum.join("")) === false) {
        return false;
      } else if (/^[1-2]*$/g.test(userNum.join("")) === true) {
        return true;
      }
    }
    expect(checkNumRange(["1", "2", "3"])).toEqual(false);
    expect(checkNumRange(["1", "2"])).toEqual(true);
    expect(checkNumRange(["@"])).toEqual(false);
  });

  test("유저의 입력값이 한 개 인지 확인 ", () => {
    function checkNumLength(userNum) {
      if (userNum.length !== 1) {
        return false;
      } else if (userNum.length === 1) {
        return true;
      }
    }
    expect(checkNumLength(["1", "2"])).toEqual(false);
    expect(checkNumLength(["1"])).toEqual(true);
  });

  test("false 시 에러문구 보내기 검사", () => {
    function errorCatch(boolean) {
      if (boolean === false) {
        throw new Error("Invalid");
      }
    }
    expect(() => errorCatch(false)).toThrow("Invalid");
  });

  test("1,2의 선택에 따라 재시작/종료 요청", () => {
    function replayOrEnd(userChoice) {
      if (userChoice === 1) {
        return "재시작함수";
      }
      if (userChoice === 2) {
        return "종료함수";
      }
    }

    expect(replayOrEnd(1)).toBe("재시작함수");
    expect(replayOrEnd(2)).toBe("종료함수");
  });
});

```

### Class에 대해 학습

이전에 독학하면서 Todolist를 만들 때 모듈화로 코드를 구성해보는 경험을 해본 적이

있었다. 그렇지만 그땐 class를 사용하지 않고 생성자 함수 function을 사용했기에

class를 먼저 학습했다.

[애플코딩의 class강의](https://www.youtube.com/watch?v=dHrI-_xq1Vo) 
[class 정리 블로그](https://jongdai.tistory.com/67)

위 두 콘텐츠에서 기본적인 class 문법에 대해 익히고 코드를 짜면서 학습했다.

**직접 코드를 짜면서 가장 많이 배운 거 같다!**

> 내가 정의 하는 Class문법은 **_뭉탱이 묶기이다_**

Class 문법을 사용하면 자주 쓰이는 함수나 변수를 묶기에 좋다

this는 constructur에서 관리해서 이전의 function 으로 this를 관리했을 때 보다

더 좋은 가독성을 느꼈다. Class 내부의 함수들은 분리가 되어 각각의 기능을

한눈에 보기에 좋았다. 

> 처음: 아 this를 어떻게 관리하지..
 깨달은 후 : 내가 왜리허게 this에 집착하지?
 
 ![](https://velog.velcdn.com/images/tkdgk1996/post/fb877b74-8c84-4a0c-b979-e8771ec950d5/image.jpeg)


코드를 짜면 짤수록 계속 골이 깊어지는 경험을 했다. Class문법이니까 this를

사용해야겠다는 그런 생각이 자꾸 들었던게 잘못이었던 거 같다.


그걸 깨닳기 전 this로 최대한 데이터를 주고받으며 코드를 짰는데,, 

Controller 역할을 하는 함수에서 가독성이 떨어지고 this 범벅의 Class를

발견하고 한번 엎고 다시 리팩토링하여 불필요한 this를 최소화 했다. 

이런 경험을 통해 this를 오히려 더 잘 다룰 수 있게 된 거 같다. 

### this랑 더 친해지기

![](https://velog.velcdn.com/images/tkdgk1996/post/773ab7bd-2acb-4ddf-93d7-015f5f9d7893/image.jpeg)


학습을 하기 전 this는 그저 해당 함수를 부른놈 또는 해당 변수를 부른놈! 

이렇게 그냥 외웠던 거 같다. 그렇게 하다 보니 this 내부의 this가 호출된 경우 

this를 잘 구별하기 힘들었고 this를 통해 값을 주고받으면서 사용하며 

내 나름의 this 분별법과 this의 장점을 알게되었다

> This는 어떤 값에 대한 변화를 다룰 때 사용하면 편리하게 사용할 수 있겠다!!

값을 변화시키고 다시 렌더링을 하는 함수가 있다면 그런 함수를 사용할때 this를 

사용하면 더 편리하겠다는 생각이 들었다. 숫자야구게임은 값을 변화시킨다기 보단

주어진 값에 대한 결과를 print하면 되게 때문에 this가 많이 필요 없었던 거 같다.

_**내 생각이 틀릴 수 도 있으니 이는 우테코 커뮤니티를 통해 더 알아봐야겠다!!**_

### 모듈화에 종류가 있구나?

이제 Class도 알고 this도 아니까 모듈화만 잘 하면 되겠다!! 하고 이제 모듈화를 시작하려 했는데..

미션에서 제공해준 라이브러리를 불러오는데 2가지의 방식이 있었다. 

**CommonJS 방식과 ES6 **

어떤 걸 선택해야하나 고민돼 모듈화의 종류에 대해 학습을 했다.

[CommonJS 모듈화 강의](https://www.youtube.com/watch?v=5NXEXkIrkAk&ab_channel=%EC%A7%90%EC%BD%94%EB%94%A9%EC%9D%98CODINGGYM)
[모듈화 정리 블로그](https://baeharam.netlify.app/posts/javascript/module)

> 모듈화의 종류 
CommonJS
ES6
AMD
UMD

#### CommonJS 

ES6 방식의 모듈화가 나오기 전에 주로 이방식이 많이 쓰였다고 한다

각각 서로 모듈을 불러오거나 내보낼땐 require, module.exports를 사용한다.

> const  모듈이름 = require(모듈주소)

> module.exports= 모듈이름 

결국 ES6에서 import export하는 방식과 배우 흡사함에 반가웠지만 .. 초반에는 

require() 로 받아와서 어떻게 모듈을 사용해야하는지 확신이 없었다

또, 한 개의 변수나 함수를 내보내고 싶다면 exports.함수명 = 

또는 module.exports={함수명} 이렇게 보낼 수 있다.

이번주에는 모듈화를 정말 많이 해볼 수 있어서 많이 배울 수 있었다.

가장 헷갈렸던 부분은 ..

**require is undefined 였다!!!**

진짜 이 오류 때문에 하루는 고생한 거 같다!! 그렇지만 지금은 안다!!!


#### require은 브라우저에서 안돼!!

 평소 프로그램이 잘 돌아가는지 확인할때 늘 브라우저를 켜서 console 창에

그 값을 비교하며 코딩을 해나갔다. 이번 미션을 수행하면서 CommonJS방식의 

모듈화를 진행하면서 node.js에 대해 처음 알게되었다. 개발자를 꿈꾸면서 이를 

처음 알게된 것도 부끄러웠지만 오히려 이 기회를 통해 제대로 배워보고자 

브라우저와 node.js의 차이를 학습하였다. 

> Browser vs Node.js 차이점
1. 각 환경에서 제공하는 API의 차이 
브라우저의 경우 사용자에게 웹 페이지를 보여주는 것이 목적!  그렇기 때문에 HTML요소를 조작하는 DOM API를 제공한다. 이와 달리 Node.js는 주로 서버에서 데이터를 다루는 목적으로 사용되기 때문에 로컬 스토리지에 파일을 생성하고 수정하는 File시스템 관련 API가 제공된다.


> 2. 자바스크립트엔진의 차이(이는 아직 잘이해를 못햇다..) 


> 3. 모듈 키워드의 차이!!
Node.js에서 CommonJS 모듈 시스템을 사용하는 반면, 브라우저는 ES 모듈 표준을 사용하고 있다. 즉, Node.js에서는 require()를, 브라우저에서는 import를 이용하여 다른 파일의 코드를 불러올 수 있다.

[Browser vs Node.js 블로그 정리글](https://velog.io/@gwanuuoo/node.js%EC%99%80-%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80%EC%9D%98-%EC%B0%A8%EC%9D%B4)

 이를 모른 상태로 계속 오류가 발생하니 멘붕이었다..! 
 
 이 경험을 통해 node.js와 친해질 수 있는 계기가 되었고 브라우저에 대해서도
 
 공부할 수 있어 좋았다.
 
 #### MVC 패턴과 더 친해지기 
 
  1주차는 알고리즘 문제에 가까운 미션이었다면 이번 과제는 게임을 만드는 과제
  
  였기 때문에 더더욱 MVC 패턴을 잘 지켜보고싶었다. 그래서 많은 설계 끝에 MVC 패턴을 완성할 수 있었다..
  
  ![](https://velog.velcdn.com/images/tkdgk1996/post/e4fd6674-22ce-4738-8bd4-d7f892d7a8a6/image.jpeg)

처음 설계했던 MVC 패턴이다...부끄럽지만 이렇게 대략적인 틀을 먼저 짜고 

그 후 컴포넌트를 구체적으로 나눴다. 그 후 함수를 기능별로 나눴다. 

최종 나의 MVC 패턴은 
![](https://velog.velcdn.com/images/tkdgk1996/post/0700ce4c-f03b-4bf2-9d2e-34a4ea0036e6/image.jpg)

이렇게 틀을 짤 수 있었다 먼저 틀을 짜고나니 함수들이 해야할 역할들을 나누기 편리했다.

#### TDD ?? TDD!! 

프로그래밍을 공부하면서 TDD는 처음 들어봤다. 내가 이해하는 TDD는

_**코드의 오류를 먼저잡는 콩고물이다!! **_

테스트코드를 통해 오류를 잡고 그 테스트코드의 잔여물을 이용해 코드의 재사용성을

높이는 굉장히 프로그래머스러운 코딩방법이다!! 🧑‍💻

Jest라는 테스트 도구를 처음 사용해봐서 테스트의 효율성이 많이 떨어졌던 거 같다..

이렇게 테스트 하는 것 보다 더 효율적인 테스트 코드가 있을텐데.. 라는생각이

계속해서 들었다. 

[Jest강의](https://www.youtube.com/watch?v=g4MdUjxA-S4)

위 강의를 계속해서 들었지만 내가 원하는 방식의 테스트를 하려면 더 추가적인 

학습이 필요했고 시간관계상 다 학습하지 못해 아쉬운 마음이 많이 든다. 

**확실한건 TDD를 잘 짠다면 일의 효율성이 분명 늘어날 것이라는 점이다.**

이번 주 미션을 하며 테스트 코드를 한번 갈아엎고 두번의 테스트 코드를 짰다.😭

3주차에는 TDD를 더욱 적용해서 시작할 때부터 테스트 코드를 잘 짜도록 노력해

야겠다!!


이번 3주차의 미션은 !! **로또게임!**

평소 로또를 한번도 사본적이 없는 필자는 ,, 코딩 뿐 아니라 로또에 대해서도

공부 해 볼 수 있는 시간이었다..!! (6개나 맞춰야하구나.. 5개에 보너스 번호가 있으면 2등이구나..😈)

2주차 미션보다 더 많은예외사항과 함수기능이 있었던 3주차였다! 

미션을 받자마자 이번주는 좀 더 계획적으로 미션을 수행해 보고싶다는 생각이 들었다!!
(이제 좀 적응이 된 프리코스ㅎㅎ..)

그렇게 개인적 목표와 과제에 대한 목표를 세웠다!! 두 목표를 달성하는 것을 이번주의 

목표로 결정했다! 

## 개인적 목표

### 1. 일정에 계획을 가지기!

 2주차에 일정에 계획성이 없이 무작정 코드만 짜다보니.. 중간 중간 잘 안풀리는 부분에 막혀 촉박한 한 주를 보냈다..(예를들어..제출 4시간 전 오류발견)
 
  이번주에 같은 실수를 반복하지 않기위해 기한을 정하고 할 수 있는 것들을 먼저 해나갔다.
  
>  _ 수요일-금요일 => 미션에서 요구하는 게임 기능 작동시키기 : ⭕️_
>   _토요일-일요일 => 미션 세부 요구사항 및 가독성을 신경쓰며 리팩토링 : ⭕️_
_  월요일 =>  테스트 코드 작성 및 우테코 홈페이지 테스트 케이스 통과 : ⭕️_
_ 화요일 => 소감 블로그 작성 및 제출 : ⭕️_

 
 이렇게 일정을 나눠 코드를 짜다보니 오히려 능률이 좋았다! 코수타(코치들과의 수다 타임) 에서 포비 코치님이 말씀해주신 대로 할 수 있는 걸 먼저 해 나가자는 전략이었다!
 
 전략은 **"대성공"** 저번주는 잘 못하는 테스트 케이스를 계속해서 붙들고 있으니 내가 잘 알고있는 부분도 제대로 챙기지 못해 마지막 날이 다가와 급급하게 해 나가는 부정적 경험을 했다..
 
 이번 주는 미션에서 요구 하는 기능을 작동시켜보고 2일동안 리팩토링을 하여 더 나아보이는 코드를 여유있게 만들 수 있었다! 월요일은 과제 제출홈페이지가 열리는 날이라서 홈페이지 테스트를 돌려보고 안되는 부분을 테스트 코드 작성해가며 모든 테스트를 통과 시키도록했다!! 
 
 이렇게 해보니 테스트 케이스도 작성이 잘됐다 😁 여유를 가진 상태에서 코드를 
 작성하는 게 개발자에게 더 좋은 역량임을 알게됐다!! (감사합니다!! 코치님!!🙏🏻)
 
 ### 2. 커밋 수 줄이기!! 
 
 1주차 2주차 미션을 수행 할 때마다 커밋의 수가 너무 많아지는 경험을 했다..
 
 이유를 혼자 분석을 해봤다. 이유는
>  1. 무계획적인 일단 해보자 코딩법 
 2. 기능단위 커밋이 아닌 함수단위 커밋
 3. 잦은 오류발생
 
 그렇게 해서 이번주는 3가지의 요인을 차단하고 커밋의 수를 줄여보려 노력했다!! 
 
 먼저 계획을 짜서 코딩을 시행하고 기능 목록을 먼저 작성한 후 기능 단위로 커밋을 실시하였다 ( 이전엔 기능목록을 먼저 작성하지 않고 먼저 코딩을 작성했었다...)
 
 사실 이 방법만으로 불필요한 커밋수를 줄일 수 있었다. 
 그리고 테스트 코드를 통해 잦은오류가 발생시키는걸 막으려 했지만.. 테스트 코드를 짜는 것 자체가 필자에게 많은 오류를 발생시켰기 때문에.. 잦은 오류 발생을 줄이기 위해 더 신경써서 코드를 작성해 나가기로 했다.
 
 2주차 미션에서 110개를 기록한 커밋을
 
 ![](https://velog.velcdn.com/images/tkdgk1996/post/097eb754-3666-4186-93e9-b362b8924b21/image.png)

3주차 미션에서 62개(월요일 기준) 으로 줄일 수 있었다!! 
![](https://velog.velcdn.com/images/tkdgk1996/post/49f07a67-fe48-4e7c-a2b3-ded191b1df9a/image.png)

프리코스를 통해 크고 작은 목적을 달성하며 하면 된다 라는 생각이 참 많이들었다..

### 3. MVC 패턴을 항상 기억하며 최대한 기능별로 컴포넌트를 나누자!

2주차와 같은 목표이지만 3주차에는 더 그럴듯한 MVC패턴을 만들어보고 싶었다! 

2주차때 MVC 패턴을 기억하고 나눠 코드를 짜는 경험이 좋았어서 이번주는 MVC 패턴을 더 신경써서 짜보았다. 

처음부터 컴포넌트를 나눠보지 않고 일단 구현이 된 로또 게임을 보고 MVC 패턴에 따라 리팩토링을 하는 방식을 택했다. 2주차 때는 선 MVC 후 코딩 이었다면 3주차는 선 코딩 후 MVC 리팩토링을 선택한 것이다. 결론은 3주차의 방식이 더욱 나랑 맞는 것 같다. 2주차때도 결국엔 파일 수정이 이루어져서 시간을 더욱 잡아먹었던 거 같다. 

![](https://velog.velcdn.com/images/tkdgk1996/post/d75d02ba-f211-41dd-875b-dba183d54ef4/image.png)

2주차와 패턴은 크게 다르지 않지만 패턴을 다루는 방법의 차이를 많이 느꼈던 거 같다.

## 과제목표

### 1.피드백 적극반영

프리코스의 공동 피드백은 어디서 잘 받아 볼 수 없는 좋은 기회라 생각이 들었다.

우아한형제들 현업자 코치님들에게 받는 피드백은 정말 그렇게 해야할 거 같은 기분이 많이 들었다.

최대한 3주차 미션에서는 위 피드백을 반영하려고 노력을 했다.

특히, README.md 파일을 상세히 작성했다. 

![](https://velog.velcdn.com/images/tkdgk1996/post/19d267c3-c39b-454d-95da-0dd6b4582023/image.png)

![](https://velog.velcdn.com/images/tkdgk1996/post/7c01595e-3a6b-4586-a235-54b31061ec9b/image.png)

기능 목록별로 커밋을 진행하고 기능 목록 초안이란 것을 만들어 커밋하여 계속해서 기능 목록을 업데이트 하였다.

이렇게 하니 이전 기능목록에서 어떤 기능이 부족했고 앞으로 어떤 기능을 추가해야할지 더욱 한눈에 정리가 됐다! 또한 함수의 기능과 단위 테스트의 규모를 최소한 하도록 노력했다!

### 2.Class 분리해보기!
코수타 시간에도 코치님께서 3주차는 기능별로 클래스를 분리해보는 시간이 될거다! 라고하셨는데 실제로 미션도 Lotto 라는 클래스를 활용하여 기능을 구현 해야했다! 

2주차에는 컴포넌트를 나눴지만 클래스를 나눠 관리하지는 않았다. 
3주차에는 클래스를 분리하려 비슷한 역할을 하는 함수를 클래스로 묶어보기로 하였다.

클래스로 비슷한 함수들을 묶어보니 가독성도 좋을 뿐더러 모듈화에도 더 편리했다! 

**문제는 lotto class** 였다.. 이 Class를 활용하라는 게 무슨의미일까 고민을 굉장히 많이했다. 

![](https://velog.velcdn.com/images/tkdgk1996/post/6aebe2ed-5a5d-4d69-992d-ba82e82db239/image.png)


이 클래스를 보고 가장 먼저 몰랐던 부분은 #number 이다 

평소 클래스를 사용할 때 constructor 와 메서드를 관리하는 부분만 알고 있었는데 

필드라는 용어를 처음 들어봤다. 

[필드를 알게해준 감사한 블로그](https://ui.toast.com/weekly-pick/ko_20200312)

위 블로그의 도움을 많이 받았다. 필자가 이해한 필드는 Class  사용할 수 있는 변수 저장의 개념이다. 그렇다면 this와 뭐가 다른가??
> 클래스 필드는 인스턴트 객체에 저장되어 인스턴스를 생성할 때마다 새로 생성되지만 this는 호출 형태에 관계없이 항상 인스턴스 객체를 가리키게 된다.
 즉,  this는 메모리에 재할당이 이루어지지않고 항상 인스턴스 객체를 가리키지만 클래스 필드는 인스턴스를 생성할 때마다 새롭게 필드값이 저장되는 것이다!

그럼 앞에 달려있는 #는 무엇일까?
>  "#" 프리픽스를 사용하면 Class 내부에서만 사용이 가능하고 인스턴스에서는 사용이 불가능하다!  가장 중요한건 Class 내부에서만 사용이 가능하고 해당 필드의 값을 바꿔줘야 할 땐 this.~ 로 값을 바꿔줄 수 있다는 것이다! #이 붙은 필드값은 "기존처럼 인스턴스별로 독립적인 공간을 갖지만, 추가로 클래스 별로 독립적인 공간을 갖는 것이다."

 필드에 대해 학습하고 Lotto Class를 이용해서 코드를 짜보려하였다!! 
 
 ![](https://velog.velcdn.com/images/tkdgk1996/post/8422517c-dcbe-4e30-9c50-1eacb4737223/image.jpeg)

(어떻게 사용해야 잘 사용해야하지?.. 이걸로 모든 입력값에 대한 타당성검사가 하고싶다..)

계속 시도를 했지만 Lotto 컴포넌트로 모든 입력값(유저의 돈, 당첨 번호, 보너스 번호)
를 검증하지는 못했다.. 이번 3주차가 끝나면 참가자 분들과 토론 나눠보고싶다!!

_그렇다면 테스트 코드를 살펴보자! _
![](https://velog.velcdn.com/images/tkdgk1996/post/50809667-280a-4f86-94f9-0dfa280eebde/image.png)

아하! Lotto의 인스턴스가 생성될 때 해당 검증이 이루어 저야하는구나??

그렇게 필자는 Lotto Class를 당첨 번호를 검증하는 Class로 사용하였다.

![](https://velog.velcdn.com/images/tkdgk1996/post/4e308f43-bec0-40c3-8393-49be05563ba4/image.png)

이렇게 사용하였는데 후에 더 좋은 방법이 있었는지 알아볼 것이다! 

### 3. Unit Test 성공하기!

필자는 2주차에서 Test코드들에 많은 아쉬움을 가졌다.. 더 잘하고싶다 TDD!!

그래서 3주차는 TDD를 모든 기능 구현이 끝난 후 실시해보기로 하였다(🤥)

2주차에는 시간에 쫓겨 제대로 test코드를 작성하지 못한거 같아 차라리 이번주는 순서가 조금 바뀌었더라도 모든 코드들이 정상 작동한다고 생각했을 때 test 코드들을 작성하여 코드 테스트를 실행해보았다! 

결과는 **2주차보다는 만족!**

이번 3주차 미션에서는 UI 관련된 코드에 대한 test 는 요구사항에 없고 도메인 로직에 관한 테스트 코드 실행이 요구사항에 있었다. 저번주는 UI test 코드를 만드는 것에 부담감이 있었는데 이번주는 test코드를 천천히 맛보라고 이렇게 내주신거 같았다.

실제 test코드를 작성하며 많은 함수의 오류를 발견하였고 이를 수정하며 테스트코드도 수정하는 경험을 했다. 

![](https://velog.velcdn.com/images/tkdgk1996/post/672b3157-ff1e-4494-9122-90f3ffd5d953/image.png)

왜 Test 코드를 작성하는지 조금이나마 알 수 있는 좋은 기회였다.

![](https://velog.velcdn.com/images/tkdgk1996/post/d84f0c63-761b-4de6-9979-d7751331a921/image.jpeg)

모든 프리코스가 끝나면 UI에 대한 테스트 코드도 작성해볼 것이다🔥🔥🔥

### 함수의 기능을 최소화(15줄미만! 근데 뭐가 좋을까?..)

함수의 기능을 최소화 하기 위해 최대한 함수를 쪼개서 나누어 보았다.

그런데 로또게임의 특성상 1위~5위에 해당하는 경우에 어떤 기능이 수행 되는 경우가 많았다. 

![](https://velog.velcdn.com/images/tkdgk1996/post/f98245c7-af5a-49bd-af0e-c291e7611fcb/image.png)

요구사항에 if/else, switch문을 사용할지 선택해보라고 하셨다.
 그래서 나는 꼭 15줄을 안으로 채우기 보단 읽는 사람 입장에서 생각해보았다.
 
 로또 게임에서는 순위별로 수행되는 기능이 다양하여 이번 3주차에서는 switch문을 많이 사용했다. 함수의 길이는 길어졌지만 가독성은 더 좋아졌다 생각한다. 
 
 ![](https://velog.velcdn.com/images/tkdgk1996/post/1981bcfe-64b7-4374-8ead-8ed751f9b3fe/image.png)

예를 들어 결과 등수에 따라 당첨 금액을 반환하는 함수를 만든다면 if문을 반복하기 보다 Switch문을 사용하는게 더 좋다고 판단하여 이렇게 코드를 구성하였다.

물론 필자의 코드가 정답도 아닐 뿐더러 다른 생각을 가진 분들도 많이 계실 수 있다.

하지만 이번 목표에서 유의미 했던 점은 스스로 생각하여 판단해서 해당 반복문의 패턴을 고민했다는 점이다. 이유를 묻는다면 대답할 수 있게끔 생각하고 결론을 내렸다.
