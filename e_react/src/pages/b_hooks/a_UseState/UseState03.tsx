import React, { useState } from 'react'

// ! React 이벤트 객체의 타입 정의

// == 이벤트 타입 ==
// : 이벤트 종류에 따라 다르게 표현
// EX) 입력 필드에 대한 변경 이벤트 : React.ChangeEvent
// EX) 클릭 이벤트 : React.ClickEvent<>
// EX) 폼 제출 이벤트 : React.FormEvent
//     >> 해당 이벤트를 사용하는 핸들러 로직에는 폼 제출의 기본 동작 방지
       // e.preventDefault(); 

// EX) 키보드 이벤트 : React.KeyboardEvent<>
// EX) 마우스 이벤트 : React.MouseEvent

export default function UseState03() {
  const [count, setCount] = useState<number>(0);
  const [input, setInput] = useState<string>('');
  const [enter, setEnter] = useState<string>('');
  
  // # 클릭 이벤트 핸들러
  const handleIncrementButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCount(prevCount => prevCount + 1);

    console.log(e.target);
  };

  // # 입력 이벤트 핸들러
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    console.log(e.target);
  };

  // # 키보드 이벤트 핸들러 *
  // >> 'Enter' 키 클릭에 대한 반응을 처리
  const handleKeyboard = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(e.key);
    if (e.key === 'Enter') {
      console.log('Enter 키가 눌러졌습니다.');
      // 입력된 내용을 배열의 요소에 추가
      // , 다양한 로직 활용
    }
  };

  return (
    <div>
      <hr />
      <h5>이벤트 객체의 여러 타입</h5>

      <p>현재 카운트: {count}</p>
      <button onClick={handleIncrementButton}>증가</button>

      <input
        type="text"
        onChange={handleInput}
        onKeyDown={handleKeyboard}
        placeholder="입력 이벤트 처리"
        value={input}
      />
      
      <input
        type="text"
        onKeyDown={handleKeyboard}
        placeholder="Enter 키 이벤트 처리"
        value={enter}
      />
    </div>
  );
}
