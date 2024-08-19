// # 문제3-2.js

let numbers = [1, 2, 3, 4, 10];

function calculateSum(numbers) {
  let length = numbers.length;
  let sum = 0;
  for(let i = 0; i < length; i++) {
    sum += numbers[i];
  };
  return alert(sum);
};

calculateSum(numbers);

