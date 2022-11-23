String.prototype.toJadenCase = function () {
    let stroka = '';
    const newStr = this.split(" ");
    for (let i = 0; i < newStr.length; i++) {
        let a = newStr[i] + '';
        let b = a[0].toLocaleUpperCase() + a.slice(1);
        console.log(b)
      stroka = stroka + " " + b;
    }
    return stroka.slice(1);
};

/*
Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real
*/