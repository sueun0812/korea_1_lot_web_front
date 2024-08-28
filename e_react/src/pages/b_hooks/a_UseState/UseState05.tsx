import React, { useState } from "react";

// ! useState를 사용한 다양한 타입 상태 관리
// 숫자, 문자, 논리, 객체, 배열

interface IUser {
  id: number;
  name: string;
}

export default function UseState05() {
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>("");
  const [isVisiable, setIsVisiable] = useState<boolean>(false);
  const [user, setUser] = useState<IUser>({
    id: 0,
    name: "",
  });
  // 배열의 경우 초기값에 주로 []빈 배열 생성
  const [items, setItems] = useState<string[]>([]);

  const handleUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const addItem = () => {
    const newItem = `Item ${items.length + 1} `;

    setItems([...items, newItem]);
  }

  return (
    <div
      style={{
        margin: "20px",
        border: "1px solid blue",
        padding: "20px",
      }}
    >
      <h5>여러 타입의 상태 관리</h5>

      {/* 숫자형 : 카운터 증가 버튼 */}
      <p>count : {count}</p>
      <button
        onClick={() => {
          setCount((prevCount) => prevCount + 1);
        }}
      >
        증가
      </button>

      {/* 문자열 : 사용자 이름 입력 필드 */}
      <p>Name : {name}</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {/* 논리형 : 토글 버튼 */}
      <p>Visiable? : {isVisiable ? "Yes" : "No"}</p>
      <button onClick={() => setIsVisiable(!isVisiable)}>토글 버튼</button>

      {/* 객체 : 사용자 정보 수정 입력 필드 */}
      {/* 
        객체의 속성 데이터는 HTML 영역 내에 출력이 가능하지만 
        >> 객체 구조 자체는 출력 불가! // {user} < 출력 불가
        >> 객체를 문자열 형식(JSON 형식으로 변환 후)으로 출력
      */}

      <p>
        User : {user.id} {user.name}
      </p>
      <p>User2 : {JSON.stringify(user)}</p>

      <input
        type="text"
        name="name"
        value={user.name}
        placeholder="사용자 이름"
        onChange={handleUserChange}
      />

      <input
        type="number"
        name="id"
        value={user.id}
        placeholder="사용자 아이디"
        onChange={handleUserChange}
      />

      {/* 배열 : 배열 요소 추가 */}
      <p>Items : {items}</p>
      <button onClick={addItem}>아이템 추가</button>
    </div>
  );
}
