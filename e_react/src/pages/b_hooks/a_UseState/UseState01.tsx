import React from 'react'

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
  return (
    <div>UseState01</div>
  )
}
