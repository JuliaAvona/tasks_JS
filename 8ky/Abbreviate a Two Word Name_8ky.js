function abbrevName(name){
    let arr = name.split(" ");
    let name1 = arr[0];
    let soname1 = arr[1];
    let inicials = name1[0] + '.' + soname1[0];

    return inicials.toUpperCase();
    }
    abbrevName("sam warris"); // S.W.