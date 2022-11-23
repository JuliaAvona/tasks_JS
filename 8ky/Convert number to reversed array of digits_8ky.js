function digitize(n) {
    let arr = Array.from(String(n), Number); // преобразует массив в число
    let naoborot = arr.reverse(); // делает массив наоборот
    return naoborot;
  }
  digitize(10);
