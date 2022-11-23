function uniTotal (string) {
    let num = 0;
    for (var i = 0; i < string.length; i++) {
        num = num + string.charCodeAt(i);
    }
    return num;
}

/* 
You'll be given a string, and have to return the sum of all characters as an int. 
The function should be able to handle all ASCII characters.
examples:
uniTotal("a") == 97 uniTotal("aaa") == 291
*/