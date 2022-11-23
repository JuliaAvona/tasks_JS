function past(h, m, s){
    let newTime = (h * 3600000) + (m * 60000) + (s * 1000);
    return newTime;
  }

// Переводим время в миллисекунды
past(0,1,1);
past(1,1,1);
past(1,0,1);