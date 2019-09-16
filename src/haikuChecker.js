var syllable = require('syllable');

export function haikuChecker(line1, line2, line3) {
  let firstCount = syllable(line1);
  let secondCount = syllable(line2);
  let thirdCount = syllable(line3);
  let isHaiku = false;

  if(firstCount === 5 && secondCount === 7 && thirdCount === 5) {
    isHaiku = true;
  }

  return isHaiku;
}
