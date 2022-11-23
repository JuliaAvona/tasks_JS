// мое решение
function solution(str){
    let stoka = '';
    for(let i = 0; i < str.length; i++){
        stoka = str[i] + stoka;
    }
    console.log(stoka);
}
solution('qwerty'); // слово наоборот

// 2 вариант
function solution(str){
  return str.split('').reverse().join('');  
}