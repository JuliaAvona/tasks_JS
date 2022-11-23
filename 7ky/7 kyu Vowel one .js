function vowelOne(s) {
  let oneZeroArr = '';
  let array = ['e', 'u' ,'i' , 'o' , 'a', 'E', 'U', 'I', 'O', 'A'];
  
  for (let i = 0; i < s.length; i++) {
    if (array.indexOf(s[i]) === -1) {
      oneZeroArr += 0;
    } else {
      oneZeroArr += 1;
    }
  }
  //console.log(oneZeroArr);
  return oneZeroArr;
}