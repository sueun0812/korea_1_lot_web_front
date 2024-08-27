import React from 'react'

// 이벤트 핸들러 - Props 전달

// ! 이벤트 핸들러 prop의 이름 지정 방법
// : on- 시작
// >> on 다음에는 이벤트 설명 키워드 작성 (시작은 대문자)
// EX) onButtonClick, onIncrementClick, onInputChange

interface ButtonProps {
  children: React.ReactNode;
  onButtonClick: () => void;  // 매개변수 X, 반환값 X
}

// 자식 컴포넌트
function Button({ children, onButtonClick }: ButtonProps) {
  return (
    // onClick 이벤트 속성에 
    // , 부모로부터 전달받은 onButtonClick 함수 전달
    <button onClick={onButtonClick}>
      {children}
    </button>
  )
}

export default function Handler03() {
  const buttonHandler = () => {
    console.log('버튼 클릭');
  }
  return (
    <div>
      <Button onButtonClick={buttonHandler}>
        이벤트 핸들러(기능 전달)
      </Button>
      <hr />

      {/* 기본 동작 방지! */}
      <form onSubmit={(e) => {
        e.preventDefault();
        console.log('전송완료 - 기본동작은 방지');
      }}>
        <input type="text" />
        {/* 
          onSubmit 핸들러의 경우 기본으로 데이터를 전송하고
          새로고침하는 기능을 가짐
        */}
        <button type='submit'>전송</button>
      </form>
    </div>
  )
}
