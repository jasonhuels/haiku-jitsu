import * as enemy from './enemy.js';
import {Thesaurus} from './thesaurus.js';

export function doDamage(line1, line2, line3, enemy) {
  let damage = 10;
  let extraDamage = enemy.keywords;

  // for(let i=0; i<extraDamage.length; i++) {
  //   extraDamage.push(synonyms(extraDamage[i]));
  // }
  console.log(extraDamage);

  for(let i=0; i<extraDamage.length; i++) {
    if(line1.includes(extraDamage)) {
      damage += 10;
    }

  }


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
        for(let j=0; j<body[i].meta.syns.length; j++) {
          for(let k=0; k<body[i].meta.syns[j].length; k++) {
            syns.push(body[i].meta.syns[j][k]);
          }
        }
      }
      console.log(syns);

    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });

    return syns;
}
