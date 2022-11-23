function nicknameGenerator(name){
    let dlinaName = name.length;
    let b = name[2];

    if (dlinaName <= 3) {
        return "Error: Name too short";
    } else if (b === 'a' || b === 'e' || b === 'i' || b === 'o' || b === 'u') {
        console.log(name.slice(0,4));
        return name.slice(0,4);
    } else {
        console.log(name.slice(0,3));
        return name.slice(0,3);
  }
}

  /*
Если 3-я буква согласная, верните первые 3 буквы.
Если 3-я буква гласная, верните первые 4 буквы.
Если строка содержит менее 4 символов, вернуть "Ошибка: имя слишком короткое".

  */