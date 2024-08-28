import React, { useState } from "react";

/*
  ! useState를 사용한 이벤트 처리 & 상태 관리

  ? 요구 관리

  1. 폼 필드
  : 사용자 아이디, 비밀번호, 이메일 주소 입력 (문자열 데이터)

  2. 입력 유효성 검사
  : 모든 필드 입력창은 비워져 있을 수 없음

  3. 상태 관리
  : 입력값은 객체로 하나의 useState를 통해 관리 (formData)

  4. 폼 제출
  : 폼 제출 시 모든 입력 값이 콘솔에 출력 (객체 자체를 출력)
  >> 입력 조건을 만족하지 않는 경우(유효성 검사 불일치 시) - 오류 메시지 출력
  >> 오류 메시지 관리도 컴포넌트 내에서 상태 관리
*/

/*
  ! 작업 순서
  - 폼과 필요한 입력 필드 생성
  - 입력 필드에 대한 상태 관리 로직 (onChange)
  - 입력 유효성 검사 추가, 오류 메시지 표시 로직 작성
  - 폼 제출 함수 구현, 콘솔에 입력 데이터 출력
*/

interface IFormData {
  id: string;
  password: string;
  email: string;
}

export default function UseState04() {
  //! 폼 데이터 상태 관리
  const [formData, setFormData] = useState<IFormData>({
    id: "",
    password: "",
    email: "",
  });

  // ! 폼 입력 오류 메시지 상태 관리
  const [errors, setErrors] = useState<IFormData>({
    id: '',
    password: '',
    email: ''
  });

  // ! 각 입력 필드 변수 선언 (비구조화 할당)
  const { id, password, email } = formData;

  // ! 폼 제출 이벤트를 처리하는 이벤트 핸들러
  const handleSignUpSubmit = (e: React.FormEvent) => {
    // ? 폼 제출에 대한 기본 동작을 방지
    e.preventDefault();

    // ? 임시 오류 메시지 객체 생성
    // >> 아이디, 비밀번호, 이메일 순으로 오류 메시지를 담아두는 객체
    // >> 최종 유효성 검사가 끝나면 해당 객체를 setErrors에 전달
    let tempErrors = {
      id: '',
      password: '',
      email: ''
    };

    // ? 폼의 유효성 상태를 추적하는 변수
    // : boolean 타입의 변수
    // >> 하나라도 유효하지 않으면 false로 지정
    let isValid = true;

    // === 아이디 유효성 검사 ===
    if (!id) {   // 아이디 입력 필드가 비워져있으면
      tempErrors.id = '아이디를 입력해주세요.'; // 오류 메시지 설정
      isValid = false;
    }

    // === 비밀번호 유효성 검사 ===
    if (!password) {   // 비밀번호 입력 필드가 비워져있으면
      tempErrors.password = '비밀번호를 입력해주세요.'; // 오류 메시지 설정
      isValid = false;
    }

    // === 이메일 유효성 검사 ===
    if (!email) {   // 이메일 입력 필드가 비워져있으면
      tempErrors.email = '이메일을 입력해주세요.'; // 오류 메시지 설정
      isValid = false;
    }

    // ? 오류 상태를 업데이트
    setErrors(tempErrors);

    // ? 모든 입력이 유효한 경우
    // >> 콘솔에 내용 출력
    // >> 입력 필드 초기화
    if (isValid) {
      console.log('회원 가입 데이터 : ', formData);
      alert(`회원 가입을 축하합니다! ${id}님`);

      // 데이터 활용 후 필드 초기화
      setFormData({
        id: '',
        password: '',
        email: ''
      });
    }
  }

  // ! 입력 필드의 변경을 감지하는 이벤트 핸들
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 이벤트 객체에서 입력 필드의 이름과 값을 추출
    const { name, value } = e.target;

    setFormData({
      // 기존 폼 데이터의 값을 복사 (스프레드 연산자)
      ...formData,

      // 변경된 필드의 값을 업데이트
      [name]: value
    })
  }

  return (
    <div
      style={{
        margin: "20px",
        padding: "10px",
        border: "1px solid #ddd",
        textAlign: "center"
      }}
    >
      <h3>회원가입 구현</h3>
      <form onSubmit={handleSignUpSubmit}>
        <div>
          <label>
            아이디:
            <input
              type="text"
              name="id"
              value={id}
              onChange={handleInputChange}
            />
          </label>
          {errors.id && (<p style={{color: 'red'}}>{errors.id}</p>)}
        </div>
        <div>
          <label>
            비밀번호:
            <input
              type="text"
              name="password"
              value={password}
              onChange={handleInputChange}
            />
          </label>
          {errors.password && (<p style={{color: 'red'}}>{errors.password}</p>)}
        </div>
        <div>
          <label>
            이메일:
            <input
              type="text"
              name="email"
              value={email}
              onChange={handleInputChange}
            />
          </label>
          {errors.email && (<p style={{color: 'red'}}>{errors.email}</p>)}
        </div>
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
}
