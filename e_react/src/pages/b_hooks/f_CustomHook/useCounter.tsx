import { useState } from "react";

// ! 커스텀 훅
// >> 사용되는 컴포넌트에 해당 훅의 기능이 정의된 것처럼 동작

export function useCounter(initialValue: number) {
  // 초기값을 매개변수로 받고
  // >> 카운터를 증가, 감소, 초기화 하는 함수와 현재 값을 반환
  const [count, setCount] = useState<number>(initialValue);

  const increment = () => setCount(prevCount => prevCount + 1);
  const decrement = () => setCount(prevCount => prevCount - 1);
  const reset = () => setCount(initialValue);

  // 객체
  // : 속성1, 메서드3
  return { count, increment, decrement, reset };
}