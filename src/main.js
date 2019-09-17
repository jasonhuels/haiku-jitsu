import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import {Player} from './player.js';
import * as enemy from './enemy.js';
import {haikuChecker} from './haikuChecker.js';
import {Battle} from './battle.js';

function battleStart() {
  $(".main-map").hide();
  $(".battle-frame").show();
  $("#main-game").removeClass("add-background");
}

function battleEnd() {
  setTimeout(function() {
    $("#adversary").text("");
    $(".main-map").show();
    $(".battle-frame").hide();
    $("#main-game").addClass("add-background");

  }, 2000);
}



  // function PlayerHealthBar() {
  //   if (this.health = 100) {
  //     $(".p1-hp").show();
  //     $(".p1-hp").removeClass("red");
  //     $(".p1-hp").addClass("green");
  //   } else if(this.health <= 90){
  //     $("#p1-100").fadeOut();
  //   } else if (this.health <= 80){
  //     $("#p1-90").fadeOut();
  //   } else if (this.health <= 70){
  //     $("#p1-80").fadeOut();
  //   } else if (this.health <= 60){
  //     $("#p1-70").fadeOut();
  //     $(".p1-hp").removeClass("green");
  //     $(".p1-hp").addClass("yellow");
  //   } else if (this.health <= 50){
  //     $("#p1-60").fadeOut();
  //   } else if (this.health <= 40){
  //     $("#p1-50").fadeOut();
  //   } else if (this.health <= 30){
  //     $("#p1-40").fadeOut();
  //     $(".p1-hp").removeClass("yellow")
  //     $(".p1-hp").addClass("red");
  //   } else if (this.health <= 20){
  //     $("#p1-30").fadeOut();
  //   } else if (this.health <= 10){
  //     $("#p1-20").fadeOut();
  //   } else if (this.health <= 0){
  //     $("#p1-10").fadeOut();
  //   }


  let newPlayer = new Player();

    $(document).ready(function() {
      $("#user-info").submit(function(event){
        event.preventDefault();
        let nameOfPlayer = $("#name-field").val();
        $("#game-info-panel").show();
        $("#show-name").text(nameOfPlayer);
        $("#player-name").text(nameOfPlayer);
        $(".main-map").show();
        $("#main-game").addClass("add-background");
        $(".welcome-screen").hide();
      });



  $("#hippie").click(function(){
    $("#adversary").text("Hippie");
    console.log("working");
    newPlayer.health = 100;
    let hippie = new enemy.Hippie(100);
    let newBattle = new Battle(newPlayer, hippie);
    console.log(newBattle);
    // healthBar();
    battleStart();
    // while(!newBattle.over) {
    // newBattle.playerTurn();
    // }

   if (newBattle.winner === newPlayer) {
       alert("YOU WIN");
       $("#score").append("<li> Hippie Defeated!</li>");
       battleEnd();
    } else if (newBattle.winner === hippie) {
       alert("YOU LOSE");
       battleEnd();
    }
 });

 $("#hipster").click(function(){
   $("#adversary").text("Hipster");
    newPlayer.health = 100;
   let hipster = new enemy.Hipster(100);
   let newBattle = new Battle(newPlayer, hipster);
   battleStart();
   // while(!newBattle.over) {
   // newBattle.playerTurn();
   // }
   if (newBattle.winner === newPlayer) {
     alert("YOU WIN");
     $("#score").append("<li> Hipster Defeated!</li>");
     battleEnd();
   } else if (newBattle.winner === hipster) {
     alert("YOU LOSE");
     battleEnd();
   }
  });
    });
