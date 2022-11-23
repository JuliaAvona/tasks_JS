function toWeirdCase(string){
  let newArr = string.split(' ');
  let newString = '';

  for (let i = 0; i < newArr.length; i++) {
    let convert = newArr[i];
    let str = '';
    for (let j = 0; j < convert.length; j++) {
      if (j % 2 !== 1) {
        str += (convert[j]).toUpperCase();
      } else {
        str += convert[j];
      }
    }
    newString += str + ' ';
  }
  
  console.log(newString.slice(0, -1));
  return newString.slice(0, -1);
}

toWeirdCase('This is a test');

/*

Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. 
The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

The passed in string will only consist of alphabetical characters and spaces(' '). 
Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

Examples:
toWeirdCase( "String" );//=> returns "StRiNg"
toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"

 */