let whatTimeIsIt = function(angle) {
  console.log(angle);
  if (angle === 0) {
    //console.log('12:00');
    return '12:00';
  } 

  
  let howHours = Math.floor((angle*2) / 60); 
  let howMinutes = Math.floor(((angle) % 60) * 2);
  
  if (howMinutes === 60) {
    howMinutes = 0;
  }
  
    if (howMinutes > 60) {
    howMinutes = howMinutes - 60;
  }
  
  if (howHours === 0) {
    howHours = 12;
  }

  if (String(howHours).length === 1) {
    howHours = '0' + howHours;
  } 

  if (String(howMinutes).length === 1) {
    howMinutes = '0' + howMinutes;
  } 

  //console.log(`${howHours}:${howMinutes}`);
  return `${howHours}:${howMinutes}`;
 }