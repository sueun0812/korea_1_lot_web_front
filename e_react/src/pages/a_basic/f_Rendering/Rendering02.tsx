import React from 'react'

// ! 배열(list) 렌더링
// >> map, filter

export default function Rendering02() {
  const people = ['정수은', '정쪼꼬', '박규병', '정파이', '김소빈'];

  const peopleDescription = [
    {
      id: 0,
      name: '정수은',
      job: 'developer'
    },
    {
      id: 1,
      name: '정쪼꼬',
      job: 'operation'
    },
    {
      id: 2,
      name: '박규병',
      job: 'business'
    },
    {
      id: 3,
      name: '정파이',
      job: 'business'
    },
    {
      id: 4,
      name: '김소빈',
      job: 'operation'
    }
  ];

  // map 콜백함수를 사용한 배열 렌더링
  // >> 요소 개수의 변화 없음
  //    : 전체 내용을 렌더링
  const listItems = people.map((person, index) => {
    // 배열을 렌더링하여 HTML 요소로 반환할 경우
    // : 각 요소를 구분할 수 있는 구분값을
    //   key 속성에 전달
    return <li key={index}>{person}</li>
  });

  // filter 콜백함수를 사용한 배열 렌더링
  // >> filter를 통해 반환된 새로운 배열
  const businessItems = peopleDescription.filter(person => 
    person.job === 'business'
  )

  // 필터링된 배열을 순회하여 UI로 반환된 businessItemsRender
  const businessItemsRender = businessItems.map(person => 
    <li key={person.id}>{person.name}</li>
  )

  return (
    <div>
      <h1>Map을 사용한 전체 리스트 렌더링</h1>
      <ul>{listItems}</ul>

      <h2>Filter를 사용한 전체 리스트 렌더링</h2>
      <ul>{businessItemsRender}</ul>
    </div>
  );
}
