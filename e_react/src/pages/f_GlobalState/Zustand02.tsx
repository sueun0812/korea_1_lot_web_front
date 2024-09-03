import React, { useState } from 'react'
import { useMemberStore } from '../../stores/user.store';
import { useAuthStore } from '../../stores/auth.store';

export default function Zustand02() {
  const { members, addMember, updateMember, deleteMember } = useMemberStore();
  const { user, logout } = useAuthStore();

  const handleCreate= () => {
    addMember({
      id: 1,
      name: '정수은'
    });
  }

  return (
    <div>
      {members.map(user => (
        <div>
          <p>{user.id} / {user.name}</p>
        </div>
      ))}
      <button onClick={() => handleCreate()}>추가</button>

      <hr />
      <p>Welcome {user}</p>
      <Login />
      <button onClick={logout}>로그아웃</button>
    </div>
  )
}

// # 로그인 컴포넌트
const Login = () => {
  const [username, setUsername] = useState('');
  const { login } = useAuthStore();

  return (
    <>
      <input 
        type="text" 
        value={username}
        onChange={(e) => setUsername(e.target.value)} 
      />
      <button onClick={() => login(username)}>로그인</button>
    </>
  )
}
