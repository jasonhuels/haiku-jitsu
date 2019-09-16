import * as enemy from './enemy.js';

export function doDamage(line1, line2, line3, enemy) {
  let damage = 10;
  let extraDamage = enemy.keywords;
  let haiku = line1.split(" ").concat(line2.split(" ")).concat(line3.split(" "));

  for(let i=0; i<extraDamage.length; i++) {
    if(haiku.includes(extraDamage[i])) {
      damage += 10;
    }
  }

  damage += checkAlliteration(haiku);
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
