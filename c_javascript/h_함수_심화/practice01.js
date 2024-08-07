// # practice01.js

// ! 배열 메서드 + 콜백 함수

// # 1번 문제
// 1. scores 배열을 생성
// 2. 무작위의 2자릿수 데이터를 8개 이상 채우기
const scores = [44, 55, 66, 77, 88];

// 3. passingScores 함수
// - 60점 이상인 점수의 개수를 passingCount 변수에 저장
// - 60점 이상인 점수의 평균을 passingAverage 변수에 저장
// >> 두개의 데이터를 반환 (return a, b)
function passingScores(socre) {
  // 60점 이상인 점수를 필터링
  const passing = scores.filter(score => score >= 60);
  
  // 60점 이상인 점수의 개수
  const passingCount = passing.length;

  // 60점 이상인 점수들의 평균
  const passingAverage = passing.reduce((acc, score) => acc + score, 0) / passingCount;

  // 각각의 변수값을 하나의 배열로 변환
  return [passingCount, passingAverage];
}

// 4. 함수 호출 (콘솔에 출력)

// ? cf) 구조분해할당
// : 배열이나 객체의 데이터를 각각의 변수에 맞춰 할당
const [passingCount, passingAverage] = passingScores(scores);
// 구조분해할당된 배열 안의 각 요소는 개별적인 변수와 동일

console.log(`60점 이상 점수의 개수 : ${passingCount}`); // 3
console.log(`60점 이상 점수의 평균 : ${passingAverage}`); // 77


// # 2번 문제
const numbers = [1, 2, 3, 4, 5];
// map 사용
// : 주어진 숫자 배열의 각 요소에 10을 더한 새로운 배열을 생성
const addedTen = numbers.map(num => num + 10);
console.log(addedTen);  // [11, 12, 13, 14, 15]

// filter 사용
// : 주어진 숫자 배열에서 홀수만 추출하여 새로운 배열을 생성
const odds = addedTen.filter(num => num % 2 !== 0);
console.log(odds);  // [ 11, 13, 15 ]

// 3) map과 filter 함께 사용
// : 주어진 숫자 배열에서 짝수만 찾아 각 숫자에 5를 곱한 새로운 배열 생성
const numbers2 = [1, 2, 3, 4, 5, 6];

const evenTimesFive = numbers2
  .filter(number => number % 2 === 0) // 2, 4, 6
  .map(number => number * 5); // 10, 20, 30

  console.log(evenTimesFive); // [ 10, 20, 30 ]