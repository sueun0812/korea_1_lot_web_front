// # practice01.js

// ! 문제 1
// add (함수 선언식)
function add(a, b) {
  let sum = a + b;
  return sum;
}

// subtract (함수 표현식)
const subtract = function(a, b) {
  return a - b;
}

// multiply (화살표 함수)
const multiply = (a, b) => a * b;

// a = 10, b = 5 (매개변수와 인자값 구분) 
console.log(add(10, 5));
console.log(subtract(10, 5));
console.log(multiply(10, 5));


// ! 문제 2
// function calculatePay(hours, rate) {
//   // 월 급여 : 근무 시간(hours) * 시급(rate)
//   if(hours <= 160) {
//     let money = hours * rate;
//     return money;
//   } else {
//     let doubleMoney = hours * (rate * 1.5);
//     return doubleMoney;
//   }
// }
// console.log(`직원 a 급여 : ${calculatePay(172, 20)}`);
// console.log(`직원 b 급여 : ${calculatePay(160, 22)}`);
// console.log(`직원 c 급여 : ${calculatePay(180, 18)}`);

function calculatePay(hours, rate) {
  // 월 급여 : 근무 시간(hours) * 시급(rate)

  if (hours > 160) {
    // 160 이하인 근무시간의 급여 계산
    const regularPay = 160 * rate;

    // 160 초과인 근무시간의 급여 계산
    const overtimeHours = hours - 160;
    const overtimePay = overtimeHours * rate * 1.5;

    return regularPay + overtimePay;

  } else {
    return hours * rate;
  }
}

// 직원들의 급여 계산
console.log('직원 A의 급여 : ' + calculatePay(172, 20));
console.log('직원 B의 급여 : ' + calculatePay(160, 22));
console.log('직원 V의 급여 : ' + calculatePay(180, 18));
