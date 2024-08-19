// # 문제 2-2.js

const userInput = "Hello World";

const result = userInput
  .trim()
  .replaceAll(' ', '')
  .split('')
  .reverse()
  .join('')
  .toUpperCase();

console.log(result);