let yearStart = 2018;
let yearFinish = 2045;
let sumNumbers = 11;
let whenOlimp = [];
let yearStartStr = String(yearStart);


//ожидаемые года: 2018, 2027, 2036, 2045

let getYears = function (yearStart, yearFinish, sumNumbers) {
    for (let i = yearStart; i <= yearFinish; i++) {
      //console.log(i);
      let iStr = String(i);
      let sum = 0;
      
        for (let j = 0; j < iStr.length; j++) {
          sum = sum + +iStr[j];
          }
          
          //console.log(sum);
          
          if (sum === sumNumbers) {
            whenOlimp.push(i);
            }
      }
      //console.log(whenOlimp);
      return whenOlimp;
}


/* Техническое задание

Мяу! Напиши программу getYears, которая будет возвращать массив с подходящими датами для Олимпиады.

Функция должна принимать на вход три параметра. Первый параметр — год, с которого нужно начать вести отсчёт (включительно). Второй — год, которым этот отсчёт надо закончить (включительно). Третий — число, которое обозначает сумму цифр в номере года.

Названия параметров могут быть любыми.

Годы в массиве должны быть числами и располагаться по возрастанию, от меньшего к большему.
*/