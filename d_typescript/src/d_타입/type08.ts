// # type08.ts
{

// ! 타입 단언(Type Assertion)
// : 개발자가 타입스크립트 컴파일러보다 해당 값의 타입의 주도권을 가지는 방법
// >> 컴파일러에게 '이 데이터의 타입을 내가 지정한 타입으로 간주해라!'라는 지시

// ? 타입 단언 방법
// as 키워드를 사용

let someValue: any = 'this is a string';

// someValue = true;  // 해당 변수에 할당은 가능하지만 길이를 구한느 로직에 실질적인 이용 불가

let length: number = (someValue as string).length;  // length 속성의 경우 문자열, 배열에서 주로 사용

console.log(length);  // 16

// # ===== 타입 단언을 활용하는 예시 =====
// : 웹 개발에서 DOM 요소를 조작할 때, 특정 DOM 요소를 구체적인 HTMLElement 타입으로 단언
// >> ts가 자동으로 해당 DOM 요소의 정확한 타입을 추론할 수 없음

// 1) HTMLButtonElement 단언

// 웹 문서에 이벤트를 등록하여
// , DOM 구조가 생성되면 두번째 인자의 화살표 함수를 실행
document.addEventListener('DOMContentLoaded', () => {
  // 버튼 요소 가져오기
  const button = document.getElementById('myButton');

  // DOM 요소에 bool 속성 지정
  // 요소.bool속성
  // 요소.bool속성 = true; 와 동일

  // button.disabled = true;
  // >> 'button'은(는) 'null'일 수 있습니다. - Error

  // HTML의 모든 요소는 HTMLElement라는 TS 내장 타입에 속함
  // >> 버튼 요소 : HTMLButtonElement
  // >> DIV 요소 : HTMLDivElement

  if (button) {
  (button as HTMLButtonElement).disabled = true;
  // >> bool 속성인 disabled 속성은 버튼 태그에 존재
  }
});

// # 2) JSON 문자열
const jsonString = '{"name": "LSA", "age": 30, "hobby": "exercise"}';

interface IUser {
  name: string;
  age: number;
}

const userData = JSON.parse(jsonString) as IUser;

console.log(userData);
}
