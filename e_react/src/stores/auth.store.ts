// auth.store.ts

import { create } from "zustand";

// auth : 허가, 인증

// # 사용자 인증을 관리하는 스토어
interface AuthState {
  user: string | null;
  isLogged: boolean;
  login: (user: string) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>(set => ({
  user: null,
  isLogged: false,
  login: (user) => set({ user, isLogged: true }), // 로그인 상태 설정
  logout: () => set({ user: null, isLogged: false }) // 로그아웃 상태 설정
}));