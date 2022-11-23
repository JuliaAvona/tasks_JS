function killer(suspectInfo, dead) {
  let killerName = '';
  for (let key in suspectInfo) {
    if (dead.length = 2) {
      if (suspectInfo[key].indexOf(dead[0]) !== -1 && suspectInfo[key].indexOf(dead[1]) !== -1) {
      return key;
    } else {
        if (suspectInfo[key].indexOf(dead[0]) !== -1) {
      return key;
    }
  }
}
}
}