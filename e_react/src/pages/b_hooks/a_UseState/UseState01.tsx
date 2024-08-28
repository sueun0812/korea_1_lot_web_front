import React, { useState } from 'react'

// ! Hooks
// : 리액트 "함수형 컴포넌트"에서 사용할 수 있는 기능
// : use- 키워드로 시작
// >> '여기서 해당 기능을 사용한다.'

// EX) useState : 상태 기능을 여기서 사용한다.
// EX) useEffect : 부수 효과 기능을 여기서 사용한다.

/*
  ! useState
  : React에서 제공하는 Hook 중 하나
  : 함수형 '컴포넌트' 내에서 상태를 관리하는 기능
    (컴포넌트 단위에서의 상태 관리)

  : useState 훅 호출 시
    >> 변화되는 상태값과 해당 상태값을 업데이트하는 함수를 제공
    >> 상태 업데이트 함수는 비동기적 처리가 기본으로 진행
    >> 상태 변경 시 컴포넌트의 재렌더링을 유발
*/

export default function UseState01() {
  // ! useState의 기본 구문
  // const [state, setState] = useState<type>(initialValue);

  // - state : 현재의 상태값(변수)
  // - setState : 상태를 업데이트하는 함수(함수)
  //   >> 관례상 'set + 현재 상태값'으로 명명
  // - initialValue : 상태의 초기값

  // >> hook은 React 내부의 함수이기 때문에 import 해서 사용
  
  // +) 상태의 타입 정의는 useState 키워드 뒤에 제네릭으로 상태값의 타입 지정

  const [count, setCount] = useState<number>(0);
  const [message, setMessage] = useState<string>('안녕하세요!');

  const handleUpClick = () => {
    // 상태(count)를 1 증가
    // setCount 내의 값이 count 변수에 할당
    // >> 해당 값은 연산식으로도 작성 가능

    // 1) 상태 설정 함수를 그대로 사용
    // >> 이전의 상태를 직접 참조
    //!   주로 현재(이전) 값과 관련없는 변화가 이루어질 경우 사용!
    // setCount(count + 1);  // 0 + 1
    // setCount(count + 1);  // 0 + 1

    // 2) 함수형 업데이트를 사용
    // >> 이전 상태 값을 기반으로 상태를 업데이트하는 경우 (권장)
    setCount(prevCount => prevCount + 1); // 0 + 1
    setCount(prevCount => prevCount + 1); // 1 + 1
    setCount(prevCount => prevCount + 1); // 2 + 1
  }

  const handleDownClick = () => {
    setCount(preveCount => preveCount - 1);
  }

  return (
    <div>
      <p style={{ color: 'blue' }}>useState 최신 상태 관리</p>

      <p>You clicked {count} times </p>
      <button onClick={handleUpClick}>카운트를 증가시킵니다.</button>
      <button onClick={handleDownClick}>카운트를 감소시킵니다.</button>
    </div>
  )
}
