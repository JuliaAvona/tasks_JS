let poly = 1221;
let ylop = 0;
let isPalindrome = false;

let polyString = String(poly); // меняем тип poly на строку
let splitPolly = polyString.split(''); // принимает на вход строку poly и преобразует в массив
let reversePolly = splitPolly.reverse(); // переворачивает элементы массива poly
let joinPolly = reversePolly.join(); //соединяет все элементы массива в строку
let deleteSymbols = joinPolly.replace(/[,]/g, ''); //удаляем запятые
let pollyNum = Number(deleteSymbols); // преобразуем в число

ylop = pollyNum;
console.log(ylop);

if (poly === ylop) {
  isPalindrome = true;
 } else {
   isPalindrome = false;
  }


/*
Метод split() принимает на вход строку и преобразует в массив, разбивая ее по разделителю.
Метод reverse() переворачивает элементы массива. Первый элемент становится последним, последний — первым.
Метод join() соединяет все элементы массива в строку.

Техническое задание

Мяу! Напиши программу, которая проверяет, является ли число палиндромом.

Число записано в переменную poly.

Переменная, куда нужно записать «перевёрнутую» версию числа, называется ylop.

Выясни, является ли число из переменной poly палиндромом. Если да, значение флага isPalindrome должно быть true, если число не палиндром, то false.

*/