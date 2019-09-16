var syllable = require('syllable');

export function haikuChecker(line1, line2, line3) {
  let count1 = syllable(line1);
  let count2 = syllable(line2);
  let count3 = syllable(line3);
  let isHaiku = false;

  let firstLine = line1.split(" ");
  let secondLine = line2.split(" ");
  let thirdLine = line3.split(" ");

  const subtractOne = [/ense/g];
  const addOne = [/sses/g];

  for (let i=0; i<firstLine.length; i++){
    for(let j=0; j<subtractOne.length; j++) {
      if(firstLine[i].match(subtractOne[j])){
        count1--;
      }
    }
  }

  for (let i=0; i<firstLine.length; i++){
    for(let j=0; j<addOne.length; j++) {
      if(firstLine[i].match(addOne[j])){
        count1++;
      }
    }
  }

  for (let i=0; i<secondLine.length; i++){
    for(let j=0; j<subtractOne.length; j++) {
      if(secondLine[i].match(subtractOne[j])){
        count2--;
      }
    }
  }

  for (let i=0; i<secondLine.length; i++){
    for(let j=0; j<addOne.length; j++) {
      if(secondLine[i].match(addOne[j])){
        count2++;
      }
    }
  }

  for (let i=0; i<thirdLine.length; i++){
    for(let j=0; j<subtractOne.length; j++) {
      if(thirdLine[i].match(subtractOne[j])){
        count3--;
      }
    }
  }

  for (let i=0; i<thirdLine.length; i++){
    for(let j=0; j<addOne.length; j++) {
      if(thirdLine[i].match(addOne[j])){
        count3++;
      }
    }
  }

  console.log(count1, count2, count3);
  if(count1 === 5 && count2 === 7 && count3 === 5) {
    isHaiku = true;
  }

  return isHaiku;
}
