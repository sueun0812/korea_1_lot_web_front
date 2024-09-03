import React, { useRef, useState } from 'react'

// ! useRef를 사용한 DOM 요소 참조
// : 컴포넌트가 재렌더링 되더라도 동일한 참조값을 유지
// >> 특정 DOM 요소에 접근하고 조작

export default function UseRef02() {
  const [count, setCount] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const prevCountRef = useRef<number>(0);

  const handleButtonFocus = () => {
    // 'current'는 참조하는 DOM 요소를 나타냄
    if (inputRef.current) {
      // .focus() : DOM 요소를 활성화
      inputRef.current.focus();
    }
  }

  
  const incrementCount = () => {
    setCount(prevCount => {
      prevCountRef.current = prevCount;
      return prevCount + 1;
    });
  }

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleButtonFocus}>Focus the input</button>
      <hr />

      <p>현재 카운트 : {count}</p>
      <p>이전 카운트 : {prevCountRef.current}</p>
      <button onClick={incrementCount}>증가</button>
    </div>
  )
}
