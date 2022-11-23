var ArrowFunc = function(arr) {
    let str = '';
    for (var i = 0; i < arr.length; i++) {
        let perevodim = String.fromCharCode(arr[i]);
        str = str + perevodim;
    }
    return str;
  }