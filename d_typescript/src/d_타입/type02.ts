// # type02.ts

export const tmp = '';

// ! 타입스크립트의 객체 타입

// ? 1. 객체 타입 지정(명시)
// : {} 중괄호를 사용하여 표현
// >> 각 데이터별 타입 명시의 구분은 세미콜론(;) 사용을 권장

const username: string = '정수은';

const user: {
  // 각 타입 구분 시 콤마와 세미콜론 모두 사용 가능
  // >> 세미콜론 사용을 권장
  name: string;
  height: number;
  favorite: any[];
  // >> 타입에서 명시한 속성은 반드시 객체 내부에 존재!
} = {
  // 객체 내부에서 각 속성의 구분은 콤마(,)로 표시
  name: '정수은',
  height: 165,
  // hobby: 'exercise' - Error
  // >> 객체는 타입 명시를 하지 않은 속성은 정의할 수 없음
  favorite: [1, '여행', false, null, undefined, ['안녕', 1]]
}

// ! 객체의 선택 속성
// : 선택적 프로퍼티
// >> 속성명 뒤에 물음표(?)를 붙여 해당 속성이 존재하지 않을 수도 있음을 표현

const ldk: {
  name: string;
  height?: number;  // 타입 명시 속성 뒤에 물음표를 작성(선택적 프로퍼티)
} = {
  name: '정수은',
  // height: 150  // >> 생략해도 오류 X
}

// ! 읽기 전용 속성
// : 속성명 "앞"에 readonly 키워드를 사용하여 해당 속성의 재할당을 금지
// >> 해당 키워드가 붙은 속성은 const 키워드를 사용하여 정의한 변수와 유사 (상수)

const readonlyName: {
  readonly name: string;
  readonly age: number;
  address?: string;
} = {
  name: '정수은',
  age: 50,
}

// 객체의 속성값 수정
// 객체.속성 = 재할당값;

// readonlyName.name = '쪼꼬'; - Error : 읽기 전용 속성은 재할당 불가
// readonlyName.age = 30; // Error
readonlyName.address = '부산시 연제구';

console.log(readonlyName);  // { name: '정수은', age: 50, address: '부산시 연제구' }
// (파일이 담긴 폴더의 터미널에서) ts-node 파일명.ts

// === 객체 타입 어노테이션 ===
// ! 문제1
// 다음 객체 타입을 정의하고, 해당 타입을 가진 객체를 하나 생성
// person: 객체는 name(문자열), age(숫자), hobby(문자열, 선택적) 속성을 가져야 한다.
const person: {
  name: string;
  age: number;
  hobby?: string;
} = {
  name: '정쪼꼬',
  age: 12,
  // hobby: '산책'
}

//! 문제2
// readonly를 사용하여 car 객체 타입을 정의하고, model(읽기 전용, 문자열)과 year(숫자) 속성을 포함하는 객체를 생성
// + model 속성에 다른 값을 할당하려고 할 때 발생하는 오류를 설명
const car: {
  readonly model: string;
  year: number;
} = {
  model: 'Audi',
  year: 2024
}

// car.model = 'BMW'; // Error