let a = [3,2,6,8,2,3]; //17
let b = [-14,-12,-7,-42,-809,-14,-12]; //-33

function maxTriSum(numbers) {
  let myArray = numbers.sort((a, b) => b - a); // сортируем по возрастанию
  let uniqueArray = []; //массив без повторов
  let sumBiggestNum = 0;
  
 myArray.forEach((element) => {
    if (!uniqueArray.includes(element)) {
        uniqueArray.push(element);
    }
}); // убираем повторы и добавляем числа в массив uniqueArray

  for (let i = 0; i < 3; i++) {
    sumBiggestNum += uniqueArray[i];
  }

  console.log(sumBiggestNum);
  return sumBiggestNum;
}

maxTriSum(b);

/*
7 kyu Maximum Triplet Sum (Array Series #7)
Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications .

Notes :
Array/list size is at least 3 .

Array/list numbers could be a mixture of positives , negatives and zeros .

Repetition of numbers in the array/list could occur , So (duplications are not included when summing).

Input >> Output Examples
1- maxTriSum ({3,2,6,8,2,3}) ==> return (17)
Explanation:
As the triplet that maximize the sum {6,8,3} in order , their sum is (17)

Note : duplications are not included when summing , (i.e) the numbers added only once .

2- maxTriSum ({2,1,8,0,6,4,8,6,2,4}) ==> return (18);

BEST PRACTICES

const maxTriSum = numbers => {
  const [a,b,c,...rest] = [...new Set([...numbers])].sort((a,b)=>b-a)
  return a+b+c
}

*/
