let num1 = 56726;
let num2 = 236;

function add(num1, num2) {
  let sum = '';
  let arr1 = String(num1).split(''); //num1 в строку //все числа num1 в массив
  let arr2 = String(num2).split(''); //num2 в строку //все числа num2 в массив
  
  
  //если первое число длинее
  if (arr1.length > arr2.length) {
    let diff = arr1.length - arr2.length; //2
    for (let i = 0; i < diff; i ++) { //вписываем первые 2 цифры 
      sum += arr1[i]; //вписываем первые 2 цифры  // ТУТ ПОКА ВСЕ РАБОТАЕТ
    }
    for (let i = 0; i < arr2.length; i++) {
      sum = sum + (Number(arr1[i + diff]) + Number(arr2[i])); //// ТУТ ПОКА ВСЕ РАБОТАЕТ
    }
  } 
  
  //если второе число длинее 
    if (arr2.length > arr1.length) {
    let diff = arr2.length - arr1.length; //2
    for (let i = 0; i < diff; i ++) { //вписываем первые 2 цифры 
      sum += arr2[i]; //вписываем первые 2 цифры  // ТУТ ПОКА ВСЕ РАБОТАЕТ
    }
    for (let i = 0; i < arr1.length; i++) {
      sum = sum + (Number(arr2[i + diff]) + Number(arr1[i])); //// ТУТ ПОКА ВСЕ РАБОТАЕТ
    }
  } 
  
  //если одинаковой длины 
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      sum = sum + (Number(arr2[i]) + Number(arr1[i])); //// ТУТ ПОКА ВСЕ РАБОТАЕТ
    }
  }
  
  
  console.log(sum);
  return Number(sum);
}


