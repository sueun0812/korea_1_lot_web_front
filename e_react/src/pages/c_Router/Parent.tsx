import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Parent() {
  // 사용자가 현재 URL 경로에 대한 정보를 제공하는 router 훅
  // >> useNavigate에서 데이터 전달
  const location = useLocation();
  const { userId } = location.state || {};

  return (
    <div>
      <Link to='example01'>Example 01</Link>
      <Link to='example02'>Example 02</Link>
      <p>User ID : {userId}</p>
    </div>
  )
}
