import React from 'react'

type UserType = {
  username: string;
  height: number;
}

type ChildProps = {
  userData: UserType | undefined
}

export default function ChildComponent({ userData }: ChildProps) {
  return (
    <div>
      <p>자식 컴포넌트(부모로 부터 데이터를 전달받음)</p>
      {userData && (
        // JSX에서 소괄호 내의 UI 구현부가 비워질 경우 오류
        <>
          <p>사용자 이름: {userData.username}</p>
          <p>사용자 키: {userData.height}</p>
        </>
      )}
    </div>
  )
}