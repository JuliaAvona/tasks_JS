function isPowerOfTwo(n){
    let newNum = n;
    if (n === 1) {
      return true;
    }
    
    while (newNum > 2) {
      newNum /= 2;
    }
  
    return newNum === 2;
  }