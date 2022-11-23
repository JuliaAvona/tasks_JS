function countPositivesSumNegatives(input) {
    let newArrPositive = 0;
    let newArrNegative = [];
    let sum = 0;
  
    for (let i = 0; i < input.length; i++) {
        if (input[i] > 0) {
            newArrPositive = newArrPositive + 1;
        } else if (input[i] < 0) {
            newArrNegative.push(input[i]);
            sum += input[i];
        }
} 
  if (input.length == 0 || input == null) {
    return [];   
  } else if (input.length == 2 && input[0] == 0 && input[1] == 0) {
    return [];
  } else {
 return [newArrPositive, sum];
  }
}

countPositivesSumNegatives([0, 0]);
countPositivesSumNegatives([]);
countPositivesSumNegatives([67, -35, -90, -86, 37, -100, 27, 65, 100, -38, 19, -94, 47, -81, 87, 98, 30]);