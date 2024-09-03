import axios from "axios";
import React, { useEffect, useState } from "react";

// ! Axios
// : JS에서 HTTP 요청을 실행하기 위한 라이브러리
// >> Promise 기반의 HTTP 클라이언트, 브라우저와 node.js 모두 사용 가능

// ? HTTP 통신
// * : 깃허브에서 가져가기

// ? Axios의 장점
// - 간결한 API를 사용 (HTTP 요청과 응답 처리가 간결하고 직관적임)
// - 브라우저의 호환성이 높음
// - 자동으로 JSON 데이터 변환을 지원

// ? Axios 사용 방법

// 1) 설치 (외부 라이브러리 설치)
// npm i axios

// 2) 'jsonplacholder에서' 데이터 가져오기 / 전송기
// https://jsonplaceholder.typicode.com/users

interface User {
  id: number;
  name: string;
  email: string;
}

export default function Axios01() {
  // jsonplaceholder에서 가져오는 데이터를 상태 관리
  const [users, setUsers] = useState<User[] | null>(null);

  // 새로운 사용자에 대한 입력 데이터를 상태 관리
  const [newUser, setNewUser] = useState<User>({
    id: 0,
    name: "",
    email: "",
  });

  // # Axios를 사용한 get 요청 (가져오기))
  const fetchUsers = async () => {
    try {
      // axios의 메서드 사용 방법
      // axios.get('url')
      // axios.post('url', 저장할데이터)

      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      const data = response.data;

      // axios 응답 내부의 데이터 : data 속성 내에 저장
      // setUsers(response.data); 도 동일
      setUsers(data);
    } catch (e) {
      console.error("Error fetching data: ", e);
    }
  };

  // async function fetchUsers() {} 와 위 화살표 함수와 동일 의미

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setNewUser({
      ...newUser,
      [name]: value
    });
  };

  const createUser = async (newUser: User) => {
    try {
      // axios를 사용한 데이터 전송(post 메서드)
      // axios.post('url', 전송할 데이터)
      // >> 데이터를 전송하고 난 뒤 해당 데이터를 반환(응답)
      const response = await axios.post('https://jsonplaceholder.typicode.com/users', newUser);

      if (users) {
      setUsers([...users, response.data]);
      console.log(response.data);
      }

    } catch (e) {
      console.error('Error creating user: ', e);
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 데이터를 axion를 통해 전송
    createUser(newUser);

    // input창 초기화
    setNewUser({
      id: 0,
      name: '',
      email: ''
    });
  };

  return (
    <div>
      HTTP: Axios GET / POST
      {/*
        users 데이터가 존재할 경우 UI 출력
        , 그렇지 않을 경우 p태그(데이터를 가져오는 중입니다)
      */}
      <h3
        style={{
          backgroundColor: "black",
          color: "white",
        }}
      >
        Axios GET
      </h3>
      {users ? (
        users.map((user) => (
          <div>
            <h4>{user.name}</h4>
            <p>{user.email}</p>
          </div>
        ))
      ) : (
        <p>데이터를 가져오는 중입니다.</p>
      )}
      {/* {users.map(user => (
        <div>
          <h4>{user.name}</h4>
          <p>{user.email}</p>
        </div>
      ))} */}
      <h3
        style={{
          backgroundColor: "black",
          color: "white",
        }}
      >
        Axios Post
      </h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          onChange={handleInputChange}
          name="name"
          value={newUser.name}
        />
        <input
          type="text"
          placeholder="email"
          onChange={handleInputChange}
          name="email"
          value={newUser.email}
        />
        <button type="submit">사용자 추가</button>
      </form>
    </div>
  );
}
