function isIsogram(str){
  str = str.toLowerCase();
  let newArr = [];

  for (let i = 0; i < str.length; i++) {
      newArr.push(str[i]);
  }
  let set = new Set();
  for (let i = 0; i < newArr.length; i++) {
      set.add(newArr[i]);
  }
  let a = set.size;

  if (a == newArr.length) {
    return true;
  } else {
    return false;
  }
}


  // "Dermatoglyphics" --> true


/*
Проверить на повторяющиеся буквы

An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

*/

