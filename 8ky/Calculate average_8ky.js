function find_average (array) {
    let sum = 0;
    let middle = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    middle = sum / array.length;
    if (array.length === 0) {
        return 0;
    } else {
        return middle;
    }
  }

  /* Write a function which calculates the average of the numbers in a given list. 
  Note: Empty arrays should return 0.
Напишите функцию, которая вычисляет среднее значение чисел в заданном списке. 
Примечание. Пустые массивы должны возвращать 0.
    assert.strictEqual(find_average([1,1,1]), 1);
    assert.strictEqual(find_average([1,2,3]), 2);
    assert.strictEqual(find_average([1,2,3,4]), 2.5);

*/