// # review04.js

// ! 회원가입 시스템
// - 회원정보 생성
// - 회원 목록
// - 정보 수정
// - 탈퇴

let homepage = {
  members: []
}

let information = {
  name: '정수은',
  id: 'qwe123',
  address: '부산',
  nickname: '수은'
}


function join(name, id, nickname) {
  const nick = homepage.findIndex(item => item.nickname === nickname);
  const name = homepage.findIndex(item => item.name === name);
  if (nick > -1) {
    console.log(`${nickname}는 이미 사용중인 닉네임입니다.`);
  } else if (nick < -1) {
    homepage.push({name, id, address, nickname});
    console.log(`${nickname}님 환영합니다!`);
  } else if (id > -1) {
    console.log(`${id}는 이미 사용중인 id입니다.`);
  } else {
    homepage.push({name, id, address, nickname});
    console.log(`${nickname}님 환영합니다!`);
  }
}

function displayMember() {
  console.log('=== Member Contents ===');
  homepage.forEach(item => {
    console.log(`이름 : ${name}, id : ${id}, 주소 : ${address}, 닉네임 : ${nickname}`);
  });
}

function updateMember(address, nickname) {
  const nick = homepage.findIndex(item => item.nickname === nickname);
  const name = homepage.findIndex(item => item.name === name);
  if (nick > -1) {
    console.log(`${nickname}는 이미 사용중인 닉네임입니다.`);
  } else if (nickname.lenght < 0) {
    
  }

}



