import * as enemy from './enemy.js';
import {Rhymes} from './rhymeCheck.js'

export function doDamage(line1, line2, line3, enemy) {
  let damage = 10;
  let extraDamage = enemy.keywords;
  let reg = /[a-z \s]/g;
  let newLine1 = "";
  let newLine2 = "";
  let newLine3 = "";

  for(let i=0; i<line1.length; i++) {
    if(line1.toLowerCase()[i].match(reg)) {
      newLine1 += line1.toLowerCase()[i];
    }
  }
  for(let i=0; i<line2.length; i++) {
    if(line2.toLowerCase()[i].match(reg)) {
      newLine2 += line2.toLowerCase()[i];
    }
  }
  for(let i=0; i<line3.length; i++) {
    if(line3.toLowerCase()[i].match(reg)) {
      newLine3 += line3.toLowerCase()[i];
    }
  }

  console.log(newLine1, newLine2, newLine3);
  let haiku = newLine1.split(" ").concat(newLine2.split(" ")).concat(newLine3.split(" "));

  for(let i=0; i<extraDamage.length; i++) {
    if(haiku.includes(extraDamage[i])) {
      damage += 10;
    }
  }

  line1 = newLine1.split(" ");
  line2 = newLine2.split(" ");
  line3 = newLine3.split(" ");

  damage += checkAlliteration(haiku);
  damage -= noRepeats(haiku);
  damage += checkRhymes(line1[line1.length-1], line2[line2.length-1], line3[line3.length-1]);
  console.log(line1[line1.length-1], line2[line2.length-1], line3[line3.length-1]);
  return damage;
}

function checkAlliteration(haiku) {
  let bonus = 0;
  for(let i=0; i<haiku.length-1; i++) {
    if(haiku[i][0] === haiku[i+1][0]) {
      bonus += 5;
    }
  }
  return bonus;
}

function noRepeats(haiku) {
  let count = 0;
  let deduction = 0;
  for(let i=0; i<haiku.length; i++) {
    for(let j=1; j<haiku.length; j++) {
      if(haiku[i] === haiku[j]) {
        count++;
      } else {
        count = 0;
      }
      if(count > 3) {
        deduction += 5;
      }
    }
    count = 0;
  }
  return deduction;
}

function checkRhymes(word1, word2, word3) {
  const words = [word1, word2, word3];
  let bonus = 0;
  let rhymes = [];
  rhymes[0] = [];
  rhymes[1] = [];
  rhymes[2] = [];
  for(let i=0; i<words.length; i++) {
    const rhyme = new Rhymes();
    const promise = rhyme.getRhymes(words[i]);
    promise.then((response) => {
      const body = JSON.parse(response);
      for(let j=0; j<body.length; j++) {
        rhymes[i].push(body[j].word);
      }
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  }

  console.log(rhymes)
  return bonus;
}
