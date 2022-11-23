let fibonacciNumbers = [1, 1];
let numbersQuantity = 7;
let numberAdd = numbersQuantity + fibonacciNumbers.length;

for (let i = fibonacciNumbers.length; i < numberAdd; i++) {
  let newNumber = fibonacciNumbers[i-1] + fibonacciNumbers[i-2];
  fibonacciNumbers.push(newNumber);
  }
  
console.log(fibonacciNumbers);


/* Техническое задание

Напиши программу, которая считает числа Фибоначчи и последовательно записывает эти числа в массив.

Массив записан в переменную fibonacciNumbers. Первые два числа уже находятся в этом массиве.

Вам нужно дополнить массив: найти следующие числа в последовательности и записать каждое из них по порядку в массив.

Количество новых чисел в массиве ограничено. В переменной numbersQuantity указано сколько чисел нужно добавить в массив. Это значение не включает в себя два числа, которые изначально даны в массиве.

*/
