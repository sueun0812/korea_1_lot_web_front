// # practice02.js

// ! 단어 필터링
const words = ['apple', 'monkey', 'banana', 'pig', 'grape', 'elephant'];

const filteredWords = (words, substring) => {
  // includes 메서드
  // : 배열, 문자열의 데이터에서 인자값이 포함되어있는지를 검사
  return words.filter(word => word.includes(substring));
}

const containsA = filteredWords(words, 'a');
console.log(containsA); // [ 'apple', 'banana', 'grape', 'elephant' ]

