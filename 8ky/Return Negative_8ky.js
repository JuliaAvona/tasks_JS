function makeNegative(num) {
    if (num >= 0) {
        return num - (num * 2);
    } else if (num < 0) {
        return num;
    }
  }