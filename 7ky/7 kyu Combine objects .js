const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
const objC = { a: 5, d: 11, e: 8 }
const objD = { c: 3 }

combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }

function combine() {
  let result = 0; //считаем кол-во аргументов
  let newObj = {}; //сюда суммируем ключи
  
  for (let i = 0; i < arguments.length; i++) {
    for (key in arguments[i]) {
    if (key in newObj) {
    newObj[key] = newObj[key] + arguments[i][key];
    } else {
      newObj[key] = arguments[i][key];
    }
  }
}
  return newObj;
}