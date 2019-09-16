import {haikuChecker} from './haikuChecker.js'
import {Player} from './player.js';
import * as enemy from './enemy.js';
import {doDamage} from './doDamage.js';
import $ from 'jquery';

export class Battle {
  constructor(player, enemy) {
    this.player = player;
    this.enemy = enemy;
  }

  playerTurn() {
    $("#haiku").submit((event) => {
      event.preventDefault();
      let line1 = $("#first-line").val();
      let line2 = $("#second-line").val();
      let line3 = $("#third-line").val();
      $("#haiku").trigger("reset");

      if(haikuChecker(line1, line2, line3)) {
        let damage = doDamage(line1, line2, line3, this.enemy);
        console.log(damage);
        this.enemy.takeDamage(damage);
        this.enemyTurn();
      }

    });
  }

  enemyTurn() {
    let attack = this.enemy.attack();
    let damage = 0;
    if(haikuChecker(attack[0], attack[1], attack[2])) {
      damage = doDamage(attack[0], attack[1], attack[2], this.player);
    }

    console.log(attack, damage);
  }
}
