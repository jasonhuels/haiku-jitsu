var syllable = require('syllable');
import {doDamage} from './doDamage.js';

export function haikuChecker(line1, line2, line3) {
  let firstCount = syllable(line1);
  let secondCount = syllable(line2);
  let thirdCount = syllable(line3);
  let damage = 0;

  if(firstCount === 5 && secondCount === 7 && thirdCount === 5) {
    damage = doDamage(line1, line2, line3);
  }

  console.log(damage);
}
