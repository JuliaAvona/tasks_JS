function strCount(obj){
  if (typeof obj == 'undefined' || obj === null) { 
    console.log('### это undefined или null');
    return 0;
  } else if (typeof obj === 'string') {
    return 1;
  } else if (Array.isArray(obj)) {
    return helper(obj);
  } else if (typeof obj === 'object') {
    return helper(Object.values(obj));
  } else {
    return 0;
  }
}

function helper(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += strCount(array[i]);
  }
  return sum;
}