function getMiddle(s) {
    let a = s.length
    let b = Math.floor(s.length/2);
  
    if (s.length % 2 === 0) {
      console.log((s[b - 1]) + s[b]);
      return s[b - 1] + s[b];
    } else {
      console.log(s[b]);
          return (s[b]);
    }
  }


/*

Вам дадут слово. Ваша задача — вернуть средний символ слова. 
Если длина слова нечетная, вернуть средний символ. 
Если длина слова четная, верните средние 2 символа.

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"

*/

