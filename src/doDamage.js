import * as enemy from './enemy.js';
import {Dictionary} from './dictionary.js'

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

  line1 = newLine1.split(" ");
  line2 = newLine2.split(" ");
  line3 = newLine3.split(" ");
  // let bonus = bigWord(line1, newLine1, line2, newLine2, line3, newLine3);
  // damage += bonus;

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
//
// async function realWord(word) {
//   let exists = false;
//   const diction = new Dictionary();
//   const promise = diction.checkWord(word);
//   promise.then(async (response) => {
//     const body = await JSON.parse(response);
//     if(body) {
//       exists = true;
//       console.log("add some points")
//     }
//   }, function(error) {
//     $('.showErrors').text(`There was an error processing your request: ${error.message}`);
//   });
//   return exists;
// }
//
// async function bigWord(line1, newLine1, line2, newLine2, line3, newLine3) {
//   let bonus = 0;
//   if(line1 == newLine1) {
//     if(await realWord(newLine1)) {
//       bonus += 10;
//     }
//   }
//   if(line2 == newLine2) {
//     if(await realWord(newLine2)) {
//       bonus += 10;
//     }
//   }
//   if(line3 == newLine3) {
//     if(await realWord(newLine3)) {
//       bonus += 10;
//     }
//   }
//   return bonus;
// }
