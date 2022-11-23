let numbers = [1, 3, 5, 7, 9, 11];
let newArr = [];

for (let i = numbers.length - 1; i >= 0; i--) {
  newArr.push(numbers[i]);
  }

numbers = newArr;
console.log(numbers);