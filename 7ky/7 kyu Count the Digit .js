let n = 10; 
let d = 1;

function nbDig(n, d) {
  //let k = 0;
  let arrSq = []; //массив квадратных чисел
  for (let i = 0; i <= n; i++) {
    arrSq.push(i*i);
  }
  let arrStr = arrSq.join('');
  let sumD = 0;

  for (let i = 0; i <= arrStr.length; i++) {
    if (arrStr[i] == d) {
      sumD += 1;
    }
  }
  
  //console.log(arrStr);
  console.log(sumD);
  return sumD;
}