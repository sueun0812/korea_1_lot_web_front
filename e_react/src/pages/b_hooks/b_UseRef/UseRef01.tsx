import React, { useRef, useState } from "react";

//! useRef
// : use + reference(참조)
// >> 변경 가능한 참조 객체를 생성할 수 있는 기능(훅)

//? 사용 목적
// - DOM 요소에 직접적으로 접근하고 조작
// - 컴포넌트가 재렌더링될 때도 값이 유지되는 변수 관리
// - 이전 상태를 기억 (렌더링 사이에 지속되는 값을 유지)

//? 기본 문법
// const refContainer = useRef(initialValue);

// - initialValue: 참조 객체의 초기값
// - refContainer.current: 저장된 현재 값에 접근

// +) useRef는 객체를 반환
//   : 해당 객체에는 current라는 속성이 존재
//   >> 컴포넌트의 재렌더링에도 값이 유지

export default function UseRef01() {
  const [text, setText] = useState<string>('');

  const lengthRef = useRef(0);

  // let lengthData = 0;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    lengthRef.current = e.target.value.length;
    // lengthData = e.target.value.length;
  }

  return (
    <div>
      <h4>현재 텍스트 길이 측정 예제</h4>
      <input type="text" value={text} onChange={handleInputChange} />
      <p>Text 길이: {lengthRef.current}</p>
      {/* <p>{lengthData}</p> */}
    </div>
  );
}