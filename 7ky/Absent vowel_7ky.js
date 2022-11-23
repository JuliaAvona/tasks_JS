function absentVowel(x) {
    if ((~x.indexOf("e")) && (~x.indexOf("i")) && (~x.indexOf("o")) && (~x.indexOf("u"))) {
        console.log( 'a' );
        return 0;
      } else if ((~x.indexOf("a")) && (~x.indexOf("i")) && (~x.indexOf("o")) && (~x.indexOf("u"))) {
        console.log( 'e' );
        return 1;
      } else if ((~x.indexOf("a")) && (~x.indexOf("e")) && (~x.indexOf("o")) && (~x.indexOf("u"))) {
        console.log( 'i' );
        return 2;
      } else if ((~x.indexOf("a")) && (~x.indexOf("e")) && (~x.indexOf("i")) && (~x.indexOf("u"))) {
        console.log( 'o' );
        return 3;
      } else if ((~x.indexOf("a")) && (~x.indexOf("e")) && (~x.indexOf("i")) && (~x.indexOf("o"))) {
        console.log( 'u' );
        return 4;
      }
}

/*
"John Doe hs seven red pples under his bsket"          =>  0  ; missing: "a"
"Bb Smith sent us six neatly arranged range bicycles"  =>  3  ; missing: "o"

A has an index of 0,
E has an index of 1,
I has an index of 2,
O has an index of 3,
U has an index of 4.

*/