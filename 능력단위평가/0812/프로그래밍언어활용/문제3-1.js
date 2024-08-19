// # 문제3-1.js
const text = document.querySelector('p');

const button = document.querySelector('button');

button.addEventListener('click', function() {
  text.textContent = '버튼이 클릭되었습니다!';
  console.log('Button clicked!');
});
