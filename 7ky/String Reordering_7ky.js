function sentence(list) {
    let newArray = []; //сюда добавить ключи по возрастанию
    let newString = [];
      for (let i = 0; i < list.length; i++) { //проходимся по объектам внутри массива
      let users = list[i]; //получаем объект внутри
        for (let key in users) {
          newArray.push(key); //получаем ключи и добавляем их в объект
        }
      }
      newArray.sort((a, b) => a - b); //сортируем массив по возрастанию
  
  for (let i = 0; i < newArray.length; i++) { //получаем ключ из массива
    let key = newArray[i]; //получаем ключ из массива
      for (let j = 0; j < list.length; j++) {
      user = list[j]; //получаем объект из массива
        if ( key in user ) { //если ключ в объекте true
          console.log(user[key]); //пишем ключ
          newString.push(user[key]);
        }
      }  
    }
  console.log(newString.join(' ')); //выводим строку
  return newString.join(' ');
  }

/* https://www.codewars.com/ - String Reordering - 7ky

The input will be an array of dictionaries.

Return the values as a string-seperated sentence in the order of their keys' integer equivalent (increasing order).

The keys are not reoccurring and their range is -999 < key < 999. The dictionaries' keys & values will always be strings and will always not be empty.

Example
Input:
List = [
        {'4': 'dog' }, {'2': 'took'}, {'3': 'his'},
        {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'}
       ]

Output:
'Vatsan took his dog for a spin'

*/