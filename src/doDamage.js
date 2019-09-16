import * as enemy from './enemy.js';
import {Thesaurus} from './thesaurus.js';

export function doDamage(line1, line2, line3, enemy) {
  let damage = 10;
  let extraDamage = enemy.keywords;
  let moreWords = [];
  let haiku = line1.split(" ").concat(line2.split(" ")).concat(line3.split(" "));

  for(let i=0; i<extraDamage.length; i++) {
    moreWords.concat(synonyms(extraDamage[i]));
  }
  extraDamage.concat(moreWords);

  for(let i=0; i<extraDamage.length; i++) {
    if(haiku.includes(extraDamage[i])) {
      damage += 10;
    }
  }

  damage += checkAlliteration(haiku);
  return damage;
}

function synonyms(word) {
  let syns = [];
  let thesaurus = new Thesaurus();
  let promise = thesaurus.getSynonyms(word);
  promise.then(function(response) {
    const body = JSON.parse(response);
    console.log(body);
    for(let i=0; i<body.length; i++) {
      if(body.meta){
        for(let j=0; j<body[i].meta.syns.length; j++) {
          for(let k=0; k<body[i].meta.syns[j].length; k++) {
            syns.push(body[i].meta.syns[j][k]);
          }
        }
      }
    }
  }, function(error) {
    $('.showErrors').text(`There was an error processing your request: ${error.message}`);
  });
  return syns;
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
