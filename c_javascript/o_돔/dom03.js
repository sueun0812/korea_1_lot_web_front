// # dom03.js

//! 1. 문서 객체 생성
//* : createElement('문서객체명')메서드 사용

// cf) 문서 객체는 생성한 뒤 '배치'가 필수!
// >> DOM 트리 구조 내부에 삽입

//? 부모객체.appenChild(자식객체)메서드
//* : 선택된 부모 요소의 자식 요소 리스트의 마지막에 새로운 요소를 추가

document.addEventListener('DOMContentLoaded', () => {
  //# 문서 객체 생성
  const header = document.createElement('h1');

  // 생성된 태그 조작
  header.textContent = '문서 객체를 동적으로 생성';
  header.setAttribute('data-custom', '사용자 정의 속성');
  header.style.color = 'white';
  header.style.backgroundColor = 'black';

  // h1 태그를 DOM 요소 내부에 추가(body 태그 아래에 추가)
  document.body.appendChild(header);

  //# 문서 객체 이동
  // appendChild() 메서드를 사용하여 문서 객체 이동
  // >> 문서 객체의 부모는 반드시 하나여야 함!
  // >> 문서 객체를 다른 문서 객체에 추가하는 경우 문서 객체가 이동

  const divA = document.querySelector('#first');
  const divB = document.querySelector('#second');

  const h2 = document.createElement('h2');
  h2.textContent = '이동하는 h2 태그';

  const toFirst = () => {
    divA.appendChild(h2); // 추가와 동시에 이동
    setTimeout(toSecond, 1000);
  }
  
  const toSecond = () => {
    divB.appendChild(h2); // 추가와 동시에 이동
    setTimeout(toFirst, 1000);
  }

  toFirst();
});

//! 2. 문서 객체 제거
// : 부모객체.removeChild(자식 객체) 메서드 사용
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    const h3 = document.querySelector('h3');

    // document.body.removeChild(h3);

    // 해당요소.parentNode: 해당 요소의 부모 객체를 지정
    h3.parentNode.removeChild(h3);
  }, 3000);
})