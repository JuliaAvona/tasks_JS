function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
    let date1 = Date.parse(currentDate); //возвращает количество миллисекунд, прошедших с 1 января 1970 года 00:00:00 по UTC
    let date2 = Date.parse(expirationDate); //возвращает количество миллисекунд, прошедших с 1 января 1970 года 00:00:00 по UTC

    if (enteredCode === correctCode && date1 <= date2) {
        return true;
    } else {
        return false;
    }  
}

/*
ЗАДАНИЕ - узнать действителен ли еще купон

Метод Date.parse() разбирает строковое представление даты и 
возвращает количество миллисекунд, прошедших с 1 января 1970 года 00:00:00 по UTC.

enteredCode, 
correctCode, 
currentDate, 
expirationDate

введенный код,
правильный код,
текущая дата,
срок годности

checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false

*/