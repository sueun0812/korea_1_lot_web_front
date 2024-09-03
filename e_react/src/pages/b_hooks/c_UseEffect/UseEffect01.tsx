import React, { useEffect, useState } from 'react'

//! 부수 효과(Side Effects)
// : 컴포넌트의 '주요 기능(상태 관리, UI 렌더링)' 외에 발생하는 작업을 의미
// EX) API 호출, 이벤트 리스너 등록, 수동 DOM 조작 등

// - API 호출: 외부 서버에서 데이터를 가져오는 작업
// - 이벤트 리스너 등록: 버튼 클릭, 윈도우 크기 변경 등의 이벤트를 처리하기 위해 리스너를 설정하는 작업
// - 수동 DOM 조작: 컴포넌트가 렌더링된 후 특정 DOM 요소를 직접적으로 조작하는 작업

//! useEffect
// : React 함수형 컴포넌트에서 부수 효과를 수행하기 위한 Hook(기능)

// 데이터 가져오기: API 호출 등 비동기 작업을 수행하여 데이터를 가져옴***
// 구독 설정: 이벤트 리스너나 WebSocket** 등의 구독을 설정
// 이벤트 등록: DOM 요소에 이벤트를 등록하여 사용자 상호작용을 처리
// 컴포넌트 렌더링: 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정***

//! React 컴포넌트의 '라이프 사이클'***
// 1. 마운팅(Mounting)
// : 컴포넌트가 DOM에 처음 삽입될 때 실행
// 2. 업데이트(Updating)
// : 컴포넌트가 재렌더링되는 단계
// : 주로 state(상태) 또는 props(속성)의 변경에 의해 발생
// 3. 언마운팅(Unmounting)
// : 컴포넌트가 DOM에서 제거될 때 실행

//! useEffect와 라이프 사이클
// 마운팅과 업데이트에서 실행할 코드 관리
// , 의존성 배열(deps)을 사용하여 업데이트 시 동작을 제어
// , 반환되는 함수는 언마운팅 시 호출되어 정리작업에 사용

// 1. 마운팅
// : useEffect에서는 빈 의존성 배열([])을 사용하여 구현
// 2. 업데이트
// : useEffect에서는 의존성 배열([deps])을 사용하여 구현
// 3. 언마운팅
// : useEffect에서는 정리(clean-up) 함수를 반환하여 구현

export default function UseEffect01() {
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>('정수은');
  
  // ! useEffect 기본 구조
  // : 1~2개의 인자가 필요

  // ? 첫번째 인자
  // : 콜백함수
  // >> 부수 효과를 수행하는 함수

  // ? 두번째 인자 (의존성 배열, deps)
  // : 해당 배열의 값이 변경될 때 마다 부수 효과가 다시 실행됨
  // >> 빈 배열 : 컴포넌트가 마운트 될 때 한번만 실행
  // +) 의존성 배열에 값이 있더라도 마운트 시에는 반드시 실행

  useEffect(() => {
    // 부수 효과를 작성
    console.log(`Count : ${count}`);

    // 의존 배열에 작성된 데이터의 상태 변화가 일어날 경우
    // >> 효과를 재실행
  }, [count]);

  useEffect(() => {
    console.log(`Name : ${name}`);
  }, [name]);

  useEffect(() => {
    console.log('컴포넌트의 렌더링');
  }, []);
  // >> 의존성 배열이 아예 없는 경우 : 모든 렌더링 마다 실행

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>증가</button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>감소</button>
      <br />
      <p>{name}</p>
      <button onClick={() => setName(name === '정수은' ? '정쪼꼬' : '정수은')}>이름 변경</button>
    </div>
  );
}
