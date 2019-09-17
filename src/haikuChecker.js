var syllable = require('syllable');

export function haikuChecker(line1, line2, line3) {
  let count1 = syllable(line1);
  let count2 = syllable(line2);
  let count3 = syllable(line3);
  let isHaiku = false;

  let firstLine = line1.split(" ");
  let secondLine = line2.split(" ");
  let thirdLine = line3.split(" ");
  let lines = [firstLine, secondLine, thirdLine];
  let counts = [count1, count2, count3];

  const subtractOne = [/ense/g, /acked/g];
  const addOne = [/sses/g, /ying/g];

  for(let k=0; k<lines.length; k++) {
    for (let i=0; i<lines[k].length; i++){
      for(let j=0; j<subtractOne.length; j++) {
        if(lines[k][i].match(subtractOne[j])){
          counts[k]--;
        }
      }
    }

    for (let i=0; i<lines[k].length; i++){
      for(let j=0; j<addOne.length; j++) {
        if(lines[k][i].match(addOne[j])){
          counts[k]++;
        }
      }
    }
  }

  console.log(counts[0], counts[1], counts[2]);
  if(counts[0] === 5 && counts[1] === 7 && counts[2] === 5) {
    isHaiku = true;
  }

  return isHaiku;
}
