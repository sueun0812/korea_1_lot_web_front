import React from 'react'
import { useCounter } from './useCounter'

// ! 커스텀 훅(Custom Hook)
// : 리액트의 기본 Hook을 사용하여 작성되는 재사용 가능한 로직의 모음
// >> useState, useEffect, useRef 등등

// ! Custom Hook 생성 방법
// >> use로 시작하는 함수 정의
//    : 해당 함수 내부에서 다른 Hook을 호출
// >> 결과와 기능을 반환

export default function Custom01() {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div>
      {count}
      <button onClick={increment}>증가</button>
      <button onClick={decrement}>감소</button>
      <button onClick={reset}>리셋</button>
    </div>
  )
}
