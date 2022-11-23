function explode(s) {
    let sum = '';
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < s[i]; j++) {
            sum = sum + s[i];
        }
    }
    return sum;
  }

/*

Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.
Examples
explode("312")

*/