import * as enemy from './enemy.js';
import {Dictionary} from './dictionary.js'

export async function doDamage(line1, line2, line3, enemy) {
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

  line1 = newLine1.split(" ");
  line2 = newLine2.split(" ");
  line3 = newLine3.split(" ");
  let bigWords = [];
  if(line1[0] === newLine1) {
    bigWords.push(newLine1);
  }
  if(line2[0] === newLine2) {
    bigWords.push(newLine2);
  }
  if(line3[0] === newLine3) {
    bigWords.push(newLine3);
  }
  if(bigWords.length > 0) {
    let someVariable = await realWord(bigWords)
    damage += someVariable;
  }

  let haiku = line1.concat(line2).concat(line3);

  for(let i=0; i<extraDamage.length; i++) {
    if(haiku.includes(extraDamage[i])) {
      damage += 10;
    }
  }

  damage += checkAlliteration(haiku);
  damage -= noRepeats(haiku);
  if(damage < 0) { damage = 0; }
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

async function realWord(words) {
  let bonus = 0;
  let exists = false;
  const diction = new Dictionary();
  const diction2 = new Dictionary();
  const diction3 = new Dictionary();
  const promise = diction.checkWord(words[0]);
  let promise2;
  let promise3;
  if(words[1]) {
    promise2 = diction2.checkWord(words[1]);
  }
  if(words[2]) {
    promise3 = diction3.checkWord(words[2]);
  }

  await Promise.all([promise, promise2, promise3]).then(function(response){
    for(let i=0; i<response.length; i++) {
      if(response[i]) {
        let body = JSON.parse(response[i]);
        if(body) {
          bonus += 5;
        }
      }
    }

  });
  return bonus;
}
