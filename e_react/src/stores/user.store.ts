// user.store.ts 파일

import { create } from "zustand";

//! zustand 폴더/파일 체계
// src 폴더 내에 stores 폴더 생성
// : 해당 폴더 내부에서 전역 관리할 상태들을 구분하여 생성

// >> 파일명
//    : 데이터명.store.ts

//# user(회원) 정보 정의
interface User {
  id: number;
  name: string;
}

//# 전체 회원의 데이터에 대한 상태 정의
// >> 데이터(속성), 기능(메서드 - 추가, 수정, 삭제)
interface MemberState {
  members: User[];
  addMember: (member: User) => void;
  updateMember: (id: number, name: string) => void;
  deleteMember: (id: number) => void;
}

//# 전체 회원에 대한 전역 상태 관리
export const useMemberStore = create<MemberState>((set) => ({
  // 저장소의 초기 데이터 설정
  members: [],
  addMember: (member) =>
    set((state) => ({
      members: [...state.members, member],
    })),
  updateMember: (id, name) =>
    set((state) => ({
      members: state.members.map((user) =>
        user.id === id ? { ...user, name } : user
      ),
    })),
  deleteMember: (id) =>
    set((state) => ({
      members: state.members.filter((user) => user.id !== id),
    })),
}));