function highAndLow(numbers){
    const newNumbers = numbers.split(" ");
    newNumbers.sort((a, b) => a - b);
    console.log(newNumbers);
    let b = newNumbers[0];
    let a = newNumbers[(newNumbers.length) - 1];
    let d = a + ' ' + b;
    console.log(d);
    return d;
  } 