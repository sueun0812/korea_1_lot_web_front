import React from 'react'
import { NavLink } from 'react-router-dom';

// ! Link VS NavLink
// >> a 태그와 유사하게 동작
// >> 페이지를 새로고침하지 않고 SPA의 다른 경로로 이동
// >> 해당 링크 클릭 시 어느 경로로 이동할 것인지를 to 속성에 지정

// 1) Link
// : 가장 기본적인 페이지 전환 컴포넌트 (a 태그의 기능 그대로 사용)

// 2) NavLink
// : Link와 유사하지만, 현재 활성화된 페이지 경로에 대한 추가적인 스타일 또는 클래스명 적용 가능

export default function NaviBar() {
  const links = [
    '/', 'basic', 'hooks', 'routerComponent', 'parent', 'routerHook', 'axios', 'globalState', 'style'
  ];

  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      margin: '10px',
      padding: '10px 20px',
      border: '1px solid black',
      borderRadius: '5px'
    }}>
      {links.map(link => (
        <NavLink 
          to={link} 
          key={link}
          style={({ isActive }) => ({
            textDecoration: 'none',
            color: isActive ? 'white' : 'black',
            backgroundColor: isActive ? 'red' : 'lightgray',
            padding: '10px 20px',
            borderRadius: '5px'
          })}
        >
          {link === '/' ? 'HOME' : link}
        </NavLink>
      ))}
    </div>
  )
}
