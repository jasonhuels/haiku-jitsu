import {haikuChecker} from './haikuChecker.js'
import {Player} from './player.js';
import * as enemy from './enemy.js';
import {doDamage} from './doDamage.js';
import $ from 'jquery';
import {Timer} from './timer.js';

export class Battle {
  constructor(player, enemy) {
    this.player = player;
    this.enemy = enemy;
    this.over = false;
    this.winner = '';
    this.timer = new Timer(60);
    setInterval(() => {
      if(this.timer.finished) {
        this.enemyTurn();
        this.timer = new Timer(60);
      } else {
        $("#time-left").text(this.timer.getTimeLeft());
      }
    }, 1000);
  }

  async playerTurn() {
    let line1 = $("#first-line").val();
    let line2 = $("#second-line").val();
    let line3 = $("#third-line").val();
    $("#haiku").trigger("reset");

    $(".player-lines").html(" ");
    $(".player-lines").append("<li>" + line1 + "</li>");
    $(".player-lines").append("<li>" + line2 + "</li>");
    $(".player-lines").append("<li>" + line3 + "</li>");

    document.getElementById("a1").innerText = line1;
    document.getElementById("a2").innerText  = line2;
    document.getElementById("a3").innerText = line3;
    document.getElementById("myModal").style.display = "block";
    setTimeout(function() {
      document.getElementById("myModal").style.display = 'none';
    }, 5000);

    let damage = 0;
    if(haikuChecker(line1, line2, line3)) {
      damage = await doDamage(line1, line2, line3, this.enemy);
      console.log(damage);
      this.enemy.takeDamage(damage);

      this.enemy.enemyHealthBar();
      this.timer.stopTimer();
    } else {
      this.timer.stopTimer();
      document.getElementById("d1").innerText = `Base Damage: 0`;
      document.getElementById("d2").innerText  = `Big Word Bonus: 0`
      document.getElementById("d3").innerText = `Keyword Bonus: 0`
      document.getElementById("d4").innerText = `Alliteration Bonus: 0`
      document.getElementById("d5").innerText  = `Repeat Deduction: 0`
      document.getElementById("d6").innerText  = `Total Damage: 0`
    }
    this.battleOver();
    if(!this.over) {
      setTimeout(() =>{
        this.enemyTurn();
      }, 6000);
    } else {
      this.battleEnd();
    }
  }

  async enemyTurn() {
    let attack = this.enemy.attack();
    let damage = 0;
    document.getElementById("a1").innerText = attack[0];
    document.getElementById("a2").innerText  = attack[1];
    document.getElementById("a3").innerText = attack[2];
    document.getElementById("myModal").style.display = "block";
    setTimeout(() => {
      document.getElementById("myModal").style.display = 'none';
      this.timer.stopTimer();
      this.timer = new Timer(60);
    }, 5000);
    if(haikuChecker(attack[0], attack[1], attack[2])) {
      damage = await doDamage(attack[0], attack[1], attack[2], this.player);
      this.player.takeDamage(damage);
      this.player.playerHealthBar();
    } else {
      document.getElementById("d1").innerText = `Base Damage: 0`;
      document.getElementById("d2").innerText  = `Big Word Bonus: 0`
      document.getElementById("d3").innerText = `Keyword Bonus: 0`
      document.getElementById("d4").innerText = `Alliteration Bonus: 0`
      document.getElementById("d5").innerText  = `Repeat Deduction: 0`
      document.getElementById("d6").innerText  = `Total Damage: 0`
    }
    console.log(attack, damage);
    this.battleOver();
    if(this.over) {
      this.battleEnd();
    }
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

  battleEnd() {
    this.timer.stopTimer();
    this.timer = '';
    if (this.winner) {
      if (this.winner === this.player) {
        document.getElementById("winOrLoss").innerText = "You WIN!";
        document.getElementById("endModal").style.display = "block";
        setTimeout(function() {
          document.getElementById("endModal").style.display = 'none';
        }, 5000);

        $("#score").append(`<li> ${this.enemy.name} Defeated!</li>`);
      } else {
        document.getElementById("winOrLoss").innerText = "You LOSE!";
        document.getElementById("endModal").style.display = "block";
        setTimeout(function() {
          document.getElementById("endModal").style.display = 'none';
        }, 5000);
      }
    }
    setTimeout(function() {
      $("#main-game").removeClass("add-background");
      $("main-game").addClass("add-skulls");
      $("#adversary").text("");
      $(".main-map").show();
      $(".battle-frame").hide();
      $("#main-game").addClass("add-background");

    }, 2000);
  }
}
