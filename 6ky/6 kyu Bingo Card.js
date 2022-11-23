function getCard() {
  let newArr = [];
//делаем столбик B
  newArr = getRandomCard(1, 15, 'B', 5, newArr);
  newArr = getRandomCard(16, 30, 'I', 5, newArr);
  newArr = getRandomCard(31, 45, 'N', 4, newArr);
  newArr = getRandomCard(46, 60, 'G', 5, newArr);
  newArr = getRandomCard(61, 75, 'O', 5, newArr);

  //newArr = newArr.substr(0, 24);
  console.log(newArr); 
  return newArr;
}

 function getRandom(min, max) {
  // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function getRandomCard(min, max, nameColumn, howRow, newArr) {
  let columnArr = [];
  while (columnArr.length < howRow) {
    let random = getRandom(min, max); //делаем число
    let newNum = nameColumn + random; //добавим букву колонки 
    if (columnArr.indexOf(newNum) === -1) { // проверка на уникальность цифры
      columnArr.push(newNum);
    }
  }
  //console.log(columnArr);
  newArr = [...newArr, ...columnArr]; 
  //console.log(newArr);
  return newArr;
}

getCard();