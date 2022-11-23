function invert(array) {
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
        newArr.push(-(array[i]));
    }
    return newArr;
}

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
