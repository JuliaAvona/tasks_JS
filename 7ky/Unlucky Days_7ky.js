function unluckyDays(year){
    let fridayCount = 0;
    for (let month=0; month<12; month++) { // перебираем все месяцы
        let a = new Date(year,month,13); // a - все 13е числа
        if(a.getDay() == 5){ // если 13 число == 5 день недели - это Пятница
          fridayCount++;   // прибавляем счетчик
       }
    }
    return fridayCount; 
}

//Метод getDay() возвращает день недели (от 0 до 6) для указанной даты.
//Примечание: воскресенье — 0, понедельник — 1 и т. Д.


  /*

Считаем сколько черных пятниц в году Friday 13th

Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.

Find the number of Friday 13th in the given year.

Input: Year in Gregorian calendar as integer.

Output: Number of Black Fridays in the year as an integer.

Examples:

unluckyDays(2015) == 3
unluckyDays(1986) == 1

  */