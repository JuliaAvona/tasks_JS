function mergeArrays(arr1, arr2) {
    let newArray = [...arr1, ...arr2];
    newArray = Array.from(new Set(newArray));
    newArray = newArray.sort();
    newArray.sort(function(a, b) {
      return a - b;
    });
    return newArray;
}