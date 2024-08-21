// # 3. generic03.ts
export const tpm = '';

// ! 제네릭 제약 조건

// ? 제약 조건(constraints)
interface ILength {
  length: number;
}

// T라는 타입 변수는 ILength 인터페이스를 포함하는 타입이어야 한다.
// : '타입변수' extends(확장) '반드시 포함할 타입'
// >> T 타입의 데이터는 반드시 LEngth 속성을 가져야 함
function constraints<T extends ILength>(arg: T): T {
  console.log(arg.length);
  return arg;
}

let data01 = constraints({
  length: 10,
  // length 속성을 반드시 포함하는 객체를 인자로 전달
  // 추가로 다른 속성 명시 가능 (확장)
  value: 3,
  addedOption: '안녕하세요'
});

console.log(data01);  // 10, { length: 10, value: 3, addedOption: '안녕하세요'}

// +) 최소한의 속성을 가진 객체 찾기
// keyof 연산자
// : 객체 형태의 타입을 따로 속성만 뽑아 유니온 타입으로 만들어주는 연산자
// >> 모든 키의 이름을 유니온 타입으로 반환

type Type = { // name과 age 속성을 가지는 Type 타입 별칭
  name: string;
  age: number;
}

type Union = keyof Type;
// Union = name | age;

// ? 조건부 타입
// : 타입 매개변수에 대한 조건 표현식을 사용하여 타입을 결정하는 방식
// >> if문과 유사한 기능

type Check<T> = T extends string ? 'String' : 'Not a String';

type Type1 = Check<string>; // String
type Type2 = Check<number>; // Not a String

function checkType<T>(value: T): Check<T> {
  let result = typeof value === 'string' ? ('String' as Check<T>): ('Not a String' as Check<T>);
  return result;
}

console.log(checkType<string>('안녕하세요')); // String
console.log(checkType(500));  // Not a String