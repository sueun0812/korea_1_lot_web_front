import React, { useRef, useState } from "react";

// ! 배열 렌더링 (추가, 조회, 수정, 삭제 - CRUD)
// >> 해당 과정에서 배열 내부의 각 요소를 구분지을 id 값이 필요

// ? 동적 배열 렌더링
// : JS 내장 함수 (map, filter) 사용

// ? 장바구니 구현

// 장바구니 타입 정의
interface IItem {
  id: number;
  name: string;
  amount: number;
}

// 기존 장바구니 목록
const initialItems: IItem[] = [
  { id: 1, name: "사과", amount: 2 },
  { id: 2, name: "칸쵸", amount: 3 },
  { id: 3, name: "우유", amount: 1 },
];

// # 자식 컴포넌트
// : 장바구니 항목 1개
// >> 부모로부터 각 아이템을 인자로 받아 하나의 장바구니 항목을 생성

interface IItemProps {
  item: IItem;
}

// function Item({ item }: { item: IItem }) {} // interface IITemProps를 만들지 않고 해당 코드 사용시 아래와 동일한 기능
function Item({ item }: IItemProps) {
  return (
    <div>
      <p>
        <b>{item.name}</b>
        amount: {item.amount}
      </p>
    </div>
  );
}

// ! useRef를 사용한 고유한 id값 생성

// # '각 아이템'을 보여주는 컴포넌트
// 수정, 삭제 기능 포함

// 컴포넌트 props 타입 정의
interface ItemComponentProps {
  item: IItem; // id, name, amount

  onRemove: (id: number) => void;
  onUpdate: (id: number, amount: number) => void;
}

const ItemComponetn = ({ item, onRemove, onUpdate }: ItemComponentProps) => {
  return (
    <div>
      <strong>{item.name}</strong>
      <input
        type="number"
        value={item.amount}
        onChange={(e) => onUpdate(item.id, Number(e.target.value))}
      />
      <button onClick={() => onRemove(item.id)}>삭제</button>
    </div>
  );
};

// # 부모 컴포넌트
export default function UseRef03() {
  const [items, setItems] = useState<IItem[]>(initialItems);
  // useRef
  // >> 컴포넌트가 리렌더링 되더라도 해당 값은 유지
  // const 참조값을 담을 변ㅅ = useRef<데이터의 타입>(초기값);
  const nextId = useRef<number>(4);

  // ? 새로운 아이템을 생성하는 함수
  const handleCreateItem = (name: string, amount: number) => {
    const newItem = {
      id: nextId.current,
      name,
      amount,
    };

    setItems([...items, newItem]);
    // nextId.current += 1;
    nextId.current++; // 위 코드와 동일한 기능
  };

  // ? id와 수량을 전달받아 데이터를 수정하는 함수
  const handleUpdateAmount = (id: number, amount: number) => {
    setItems(
      items.map((item) => (item.id === id ? { ...item, amount } : item))
    );
  };

  // ? id 값을 전달받아 삭제하고자하는 요소를 filtering하는 함수
  const handleRemove = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div>
      {/* 
        <Item item={initialItems[0]} />
        <Item item={initialItems[1]} />
        <Item item={initialItems[2]} /> 
      */}
      {/* 
        {initialItems.map((item, index) => (
        // map과 filter 사용 시 생성되는 컴포넌트 또는 요소에는
        // , 각각을 구분할 수 있는 key 값을 전달
        <Item item={item} key={index} />
        ))} // 권장하지 않음
       */}
      {initialItems.map((item, index) => (
        // 배열 안의 객체 데이터는 각 데이털르 구분할 수 있는
        // : 고유하고 변화되지 않는 id 값 사용을 권장
        <Item item={item} key={item.id} />
      ))}

      <hr />
      <button onClick={() => handleCreateItem("새로운 항목", 1)}>
        새 항목 추가
      </button>
      <>
        {items.map((item) => (
          <div key={item.id}>
            <ItemComponetn
              item={item}
              onRemove={handleRemove}
              onUpdate={handleUpdateAmount}
            />
          </div>
        ))}
      </>
    </div>
  );
}
