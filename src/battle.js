import {haikuChecker} from './haikuChecker.js'
import {Player} from './player.js';
import * as enemy from './enemy.js';
import {doDamage} from './doDamage.js';
import $ from 'jquery';

export class Battle {
  constructor(player, enemy) {
    this.player = player;
    this.enemy = enemy;
    this.over = false;
    this.winner = '';
  }

  playerTurn() {
    let line1 = $("#first-line").val();
    let line2 = $("#second-line").val();
    let line3 = $("#third-line").val();
    $("#haiku").trigger("reset");
    let damage = 0;
    if(haikuChecker(line1, line2, line3)) {
      damage = doDamage(line1, line2, line3, this.enemy);
      console.log(damage);
      this.enemy.takeDamage(damage);
    }
    this.battleOver();
    if(!this.over) {
      this.enemyTurn();
    }
    inputtedLines();
  }


  enemyTurn() {
    let attack = this.enemy.attack();
    let damage = 0;
    if(haikuChecker(attack[0], attack[1], attack[2])) {
      damage = doDamage(attack[0], attack[1], attack[2], this.player);
      this.player.takeDamage(damage);
    }
    console.log(attack, damage);
    this.battleOver();
    // if(!this.over) {
    //   this.playerTurn();
    //
    // }
  }

  battleOver() {
    if(this.player.checkDefeated()) {
      this.over = true;
      this.winner = this.enemy;
    } else if(this.enemy.checkDefeated()) {
      this.over = true;
      this.winner = this.player;
    }
  }
}

function inputtedLines() {
  let line1 = $("#first-line").val();
  let line2 = $("#second-line").val();
  let line3 = $("#third-line").val();
  $(".input-lines").append("<li>" + line1 + "</li>");
  $(".input-lines").append("<li>" + line2 + "</li>");
  $(".input-lines").append("<li>" + line3 + "</li>");

}
