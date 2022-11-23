function reverseWords(str){
    let newStroka = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] == Alpha) {
            newStroka == newStroka + str[i];
        } else if (str[i] == ' ') {
            newStroka == str[i] + newStroka;
        }
    }
    console.log(newStroka);
    return newStroka;
  }

  //"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"