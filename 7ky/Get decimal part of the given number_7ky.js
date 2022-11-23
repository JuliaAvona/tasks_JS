function getDecimal(n){
    if (Number.isNaN(n) || n === Infinity) { //проверка на NaN || Infinity
    } else if (n % 1 == 0) { //если целое - вернет 0
      return 0;
    } else { 
      n = Math.abs(n); //делаем положительным
      let trunkNum = Math.trunc(n); //берем целое число из n
      n = n - trunkNum; //убираем число до запятой
      console.log(n);
      return n;
    }
  }