function likes(names) {
  let namesLength = names.length;
  let howOthers = namesLength - 2;

  if (namesLength === 0) {           //"no one likes this" +
    return 'no one likes this';
  } else if (namesLength === 1) {    // "Peter likes this" +
    //console.log(`"${names[0]} likes this"`);
    return `${names[0]} likes this`; 
  } else if (namesLength === 2) {    //"Jacob and Alex like this" +
    //console.log(`"${names[0]} and ${names[1]} like this"`); 
    return `${names[0]} and ${names[1]} like this`;
  } else if (namesLength === 3) {    //"Max, John and Mark like this" 
    //console.log(`"${names[0]}, ${names[1]} and ${names[2]} like this"`);
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else if (namesLength >= 4) {    //"Alex, Jacob and 2 others like this"
    //console.log(`"${names[0]}, ${names[1]} and ${howOthers} others like this"`);
    return `${names[0]}, ${names[1]} and ${howOthers} others like this`;
  }
}

likes(['Max', 'John', 'Mark']);
/*

You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. 
We want to create the text that should be displayed next to such an item.
Implement the function which takes an array containing the names of people that like an item. 
It must return the display text as shown in the examples:

[]                                -->  "no one likes this" +
["Peter"]                         -->  "Peter likes this" +
["Jacob", "Alex"]                 -->  "Jacob and Alex like this" +
["Max", "John", "Mark"]           -->  "Max, John and Mark like this" +
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this" +
Note: For 4 or more names, the number in "and 2 others" simply increases.



 */