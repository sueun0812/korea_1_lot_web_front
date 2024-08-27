import React, { useState } from 'react'

// 확장 플러그인
// React Snippets 설치
// : 리액트에서 사용할 다양한 코드 집합을 제공

// EX) rfc(rfce - export 모듈이 분리)

//! rfc 사용 함수형 컴포넌트 구조
export default function ReactExample() {
  //? 리액트와 일반 TS의 차이
  // 간단한 카운터 예제

  // 1) UI 컴포넌트가 클래스 또는 '함수' 형태로 작성
  // >> 함수형 컴포넌트 사용을 권장

  // 2) 컴포넌트를 기반으로 UI와 상태 관리를 구현

  //? 리액트 기능 사용 (함수형 컴포넌트의 기능: hook)
  const [count, setCount] = useState<number>(0);

  function increment() {
    setCount(count + 1);
  }
  
  function decrement() {
    setCount(count - 1);
  }


  // jsx(tsx)에서는 return문을 사용하여 HTML 영역을 반환
  return (
    <div>
      <h1>Count: {count}</h1>
      {/*  
        JSX(TSX)에서는 속성 지정 시 lowerCamelCase 사용
        js(ts): onclick 속성
        >> jsx(tsx): onClick 속성
      */}
      <button onClick={increment}>증가</button>
      <button onClick={decrement}>감소</button>
    </div>
  )
}

//! rfce 사용 함수형 컴포넌트 구조
// import React from 'react'

// function ReactExample() {
//   return (
//     <div>ReactExample</div>
//   )
// }

// export default ReactExample