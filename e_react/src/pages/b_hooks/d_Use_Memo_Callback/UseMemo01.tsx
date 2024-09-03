import React, { useMemo, useState } from "react";

//! useMemo
// use + Memoization(메모리화)
// : 성능 최적화를 위한 Hook
// >> 컴포넌트가 렌더링될 때 "특정 연산"의 결과를 메모리에 저장하여
//    , 동일한 값에 대해서는 해당 연산을 다시 수행하지 않도록 하는 훅

export default function UseMemo01() {
  const [count, setCount] = useState<number>(0);
  const [inputValue, setInputValue] = useState<string>("");

  // 복잡한 계산 함수 (시간이 오래 걸리는 작업)
  const expensiveCalc = (num: number) => {
    for (let i = 0; i < 999999999; i++) {}
    return num + 100;
  }

  // const result = expensiveCalc(count);

  //! useMemo()훅의 경우 메모리에 저장된 값을 반환
  // >> 내부의 구조는 useEffect와 동일 (콜백함수, 의존성 배열)
  const memoizedResult = useMemo(() => {
    const result = expensiveCalc(count);
    return result;
    // 배열 안의(의존성 배열, deps)의 값이 변경될 때만 재계산
  }, [count]);

  return (
    <div>
      <h3>useMemo</h3>
      <p>Count: {count}</p>
      <p>Result(Count + 100): {memoizedResult}</p>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        증가
      </button>

      <p>
        <input
          type="text"
          value={inputValue}
          placeholder="입력해주세요."
          onChange={(e) => setInputValue(e.target.value)}
        />
      </p>
    </div>
  );
}