import * as enemy from './enemy.js';

export function doDamage(line1, line2, line3, enemy) {
  let damage = 10;

  let words = line1.split(" ");
  for(let i=0; i<words.length; i++) {
    if(enemy.keywords.includes(words[i])) {
      damage += 10;
    }

  }


  return damage;
}
