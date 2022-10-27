let calculateRoots = function (a, b, c) {
  let diskr = b * b - 4 * a * c;

  if (diskr < 0) {
    return "Корней нет";
  } else if (diskr === 0) {
    let koren = -b / (2 * a);
    return "Корень равен " + koren;
  } else {
    let koren1 = (-b + Math.sqrt(diskr)) / (2 * a);
    let koren2 = (-b - Math.sqrt(diskr)) / (2 * a);
    return "Первый корень равен " + koren1 + ", второй корень равен " + koren2;
  }
};
