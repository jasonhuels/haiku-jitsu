var syllable = require('syllable');

export function haikuChecker(line1, line2, line3) {
  let firstCount = syllable(line1);
  let secondCount = syllable(line2);
  let thirdCount = syllable(line3);
  let isHaiku = false;

  let firstLine = line1.split(" ");
  let secondLine = line2.split(" ");
  let thirdLine = line3.split(" ");

  const subtractOne = [/ense/g];
  const addOne = [/sses/g];

  for (let i=0; i<firstLine.length; i++){
    if(firstLine[i].match(subtractOne[0])){
      firstCount--;
    }
  }

  for (let i=0; i<firstLine.length; i++){
    if(firstLine[i].match(addOne[0])){
      firstCount++;
    }
  }

  console.log(firstCount, secondCount, thirdCount);
  if(firstCount === 5 && secondCount === 7 && thirdCount === 5) {
    isHaiku = true;
  }

  return isHaiku;
}
