let countBits = function(n) {
  let countOne = 0;
  let dec2bin = n.toString(2);
  dec2bin = String(dec2bin);
  for (let i = 0; i < dec2bin.length; i++) {
    if (dec2bin[i] == 1) {
      countOne++;
    }
  }
  //console.log(dec2bin);
  //console.log(countOne);
  return countOne;
};

/*

Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

*/