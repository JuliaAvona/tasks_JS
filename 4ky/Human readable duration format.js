function formatDuration (allSeconds) {

  if (allSeconds === 0) return 'now';

  let years = 0; //31536000s
  let days = 0; //86400s
  let hours = 0; //3600s
  let minutes = 0; //60s
  let seconds = 0; // >60
  let rest = 0; //rest
  let phraseArr = [];
  let phrase = '';

years = Math.floor(allSeconds / 31536000); //2,5
rest = allSeconds - (years * 31536000); //15768000
days = Math.floor(rest / 86400); //182
rest = rest - (days * 86400); //43200
hours = Math.floor(rest / 3600); //12
rest = rest - (hours * 3600); // 2800-rest
minutes = Math.floor(rest / 60); //46
seconds = rest - (minutes * 60); //40

const addDate = (period, name) => {
  if (period > 1) {
    phraseArr.push(`${period} ${name}s`);
  } else if (period === 1) {
    phraseArr.push(`${period} ${name}`);
  }
}

addDate(years, 'year');
addDate(days, 'day');
addDate(hours, 'hour');
addDate(minutes, 'minute');
addDate(seconds, 'second');

for (let i = 0; i < phraseArr.length; i++) {
  if (i < (phraseArr.length - 2)) {
    phrase += `${phraseArr[i]}, `;
  } else if (i === phraseArr.length - 2) {
    phrase += `${phraseArr[i]} `;
  } else if (i === phraseArr.length - 1 && phraseArr.length !== 1) {
    phrase += `and ${phraseArr[i]}`;
  } else if (i === phraseArr.length - 1 && phraseArr.length === 1) {
    phrase += `${phraseArr[i]}`;
  }
}
console.log(phraseArr);
console.log(phrase);
return phrase;
}

console.log(formatDuration(3662));

    // assert.strictEqual(formatDuration(1), "1 second");
    // assert.strictEqual(formatDuration(62), "1 minute and 2 seconds");
    // assert.strictEqual(formatDuration(120), "2 minutes");
    // assert.strictEqual(formatDuration(3600), "1 hour");
    // assert.strictEqual(formatDuration(3662), "1 hour, 1 minute and 2 seconds");