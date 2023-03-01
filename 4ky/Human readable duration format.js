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

/*DESCRIPTION:
Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

It is much easier to understand with an example:

* For seconds = 62, your function should return 
    "1 minute and 2 seconds"
* For seconds = 3662, your function should return
    "1 hour, 1 minute and 2 seconds"
For the purpose of this Kata, a year is 365 days and a day is 24 hours.

Note that spaces are important.

Detailed rules
The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.

STRINGSDATE TIMEALGORITHMS

*/
