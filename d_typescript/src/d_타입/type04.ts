// # type04.ts
export const tmp = '';

// ! === Union(유니언) 타입 ===
// : 여러 타입 중 하나가 될 수 있는 값을 나타내는 방법
// >> 값에 허용된 타입을 두 개 이상으로 지정
// >> OR 연산자 (A 또는 B ...)
// >> | (vertical bar) 기호를 사용하여 표현

// ? 유니언 타입의 사용
// >> 변수, 함수의 매개변수, 반환값 등에서 모두 사용 가능
// >> 타입의 유연성을 제공
//    : 무분별한 any 사용을 방지

// ? 유니언 타입의 사용
// type UnionType = Type1 | Type2 | Type3;

type Variabletype = string | number | boolean | string[];

let value: Variabletype = '문자';
value = 123;
value = true;
value = ['안녕', '반가워'];

// value = [123, 456]; - Error
// value = {}; - Error

// ? 타입 별칭의 예시

// 관리자 계정 Admin
type Admin = {
  id: string;
  password: string;
};

// 사용자 계정 User
type User = {
  id: string;
  name: string;
};

// 위의 두가지 계정을 가지는 사이트의 계정 타입
type Person = Admin | User;
// >> 타입 별칭이 union 타입인 경우
// >> 중복되지 않은 타입 속성은 옵셔널(?)과 동일

/*
  type Person = {
  id: string,
  password?: strimg;
  name?: string;
  }
*/

let las: Person = {
  id: '123',
  password: '234'
};

let idk: Person = {
  id: '123',
  name: '234'
};

// ? 타입 별칭에서 union 타입 사용 시
// : 정확한 타입 지정을 위해 타입 가드를 사용
// >> 타입 가드 - 조건문을 통해 타입을 좁혀나가는 방식

type Union = number | string;

function getAge(age: Union) {
  // 나이가 입력될 경우
  // - 숫자 : 소수점 자리가 없도록 반올림하여 문자열로 반환 (toFixed())
  // - 문자열 : 대문자로 변환하여 반환 (toUpperCase())

  // ? Union 타입의 경우 타입 가드를 지정하지 않을 경우
  // 지정된 모든 타입에 사용할 수 있는 메서드와 속성만 사용 가능

  // age.toFixed(); - Error
  // age.toUpperCase(); - Error

  if (typeof age === 'number') {
    age = age.toFixed();
    return age;
  } else {
    age = age.toUpperCase();
    return age;
  }
}

console.log(getAge(12.345));  // 12
console.log(getAge('12 years old'));  // 12 YEARS OLD