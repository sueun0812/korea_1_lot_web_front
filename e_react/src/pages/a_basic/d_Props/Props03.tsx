import React from 'react'

type ChildType = {
  name: string;
  age: number;
};

function ChildeComponent({name, age}: ChildType) {
  return (
    <div>안녕하세요. 제 이름은 {name}이고 {age}세 입니다.</div>
  );
};

ChildeComponent.defaultProps = {
  name: '강동원'
}

export default function Props03() {
  return (
    <div>
      <h1 style={{
        backgroundColor: 'black',
        color: 'white'
      }}>Props 연습</h1>
      
      <ChildeComponent name='어쩌구' age={10} />
      <ChildeComponent age={15} />
    </div>
  )
}
