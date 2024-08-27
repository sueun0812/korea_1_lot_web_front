import React, { useState } from 'react'

// 자식 컴포넌트
// : 부모 컴포넌트에서 사용되며 부모로부터 count 값을 전달받아 UI로 출력
// >> p요소 내에 count 변수값을 작성
export function ChildComponent({ count }: { count: number}) {
  return (
    <p style={{ color: 'orange' }}>{count}</p>
  )
}

// 부모 컴포넌트
// : counter UI 작성 
// >> 버튼 2가지를 생성하여 클릭 시 count 값이 변경
//    : 변경된 count값은 자식 컴포넌트에게 전달
export default function Handler02() {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <hr />
      <button onClick={() => setCount(count + 1)}>증가</button>
      <button onClick={() => setCount(count - 1)}>감소</button>
      <ChildComponent count={count} />
    </div>
  )
}
