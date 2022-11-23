function whoseBicycle(diary1, diary2, diary3) {
  let scoreFirstSon = 0;
  let scoreSecondSon = 0;
  let scoreThirdSon = 0;

    for (let key in diary1) {
      scoreFirstSon += diary1[key];
    }

    for (let key in diary2) {
      scoreSecondSon += diary2[key];
    }

    for (let key in diary3) {
      scoreThirdSon += diary3[key];
    }

    console.log(scoreFirstSon, scoreSecondSon, scoreThirdSon);
  
  if (scoreFirstSon > scoreSecondSon && scoreFirstSon > scoreThirdSon) {
    console.log('I need to buy a bicycle for my first son.');
    return 'I need to buy a bicycle for my first son.';
  } else if (scoreSecondSon >= scoreFirstSon && scoreSecondSon > scoreThirdSon) {
    console.log('I need to buy a bicycle for my second son.');
    return 'I need to buy a bicycle for my second son.';
  } else if (scoreThirdSon >= scoreFirstSon && scoreThirdSon >= scoreSecondSon) {
    console.log('I need to buy a bicycle for my third son.');
    return 'I need to buy a bicycle for my third son.';
  }
}