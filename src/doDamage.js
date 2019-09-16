import * as enemy from './enemy.js';

export function doDamage(line1, line2, line3) {
  let damage = 10;

  let hippie = new enemy.Hippie(100)
  let words = line1.split(" ");
  for(let i=0; i<words.length; i++) {
    if(hippie.keywords.includes(words[i])) {
      damage += 10;
    }

  }


  return damage;
}
