// # exception02.js

/*
! Error 객체
: JS 내의 모든 예외는 JS 내장 에러인 Error 객체를 상속받은 객체

- Error 객체에서 주로 사용되는 속성
: name (예외 이름)
: message (예외 메시지)

? 예외 객체
: 예외가 발생하면 예외와 발생된 정보를 확인할 수 있는 객체
: 예외 생성
>> new Error('에러메시지 입력');
*/

let myError = new Error('에러를 생성합니다.');
// console.log(myError);

// cf) throw 키워드
// : 강제 발생
// >> 예외나 기타 명시적인 값을 표현하는데 사용
// throw myError;

// throw '안녕하세요';
// throw 42;

//? 프로그래밍 구현 중 비즈니스 로직(설계 흐름)에 따라 
// 개발자가 코드의 흐름을 제어하기 위해 적절한 예외 사용을 권장

function text(object) {
  // object가 undefined일 경우 또는
  // object의 속성값들이 undefined인 경우 에러를 발생

  if (!object || object.a === undefined || object.a === undefined) {
    // object가 undefined일 경우
    // 각 a, b 속성이 undefined인 경우
    throw new Error('함수를 호출할 때 object와 a, b 속성이 전달되어야 합니다.');
  }
  
  console.log(object.a + object.b);
}

try {
  text({a: 5, b: 10});
  text({a: '이', b: '승아'});
  text();
} catch (e) {
  console.error('에러 발생: ', e.message);
}

// 코드가 정상적으로 작동
console.log('일반 코드 흐름');