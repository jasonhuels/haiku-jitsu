import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import {Player} from './player.js';
import * as enemy from './enemy.js';
import {haikuChecker} from './haikuChecker.js';
import {Battle} from './battle.js';


  let newPlayer = new Player();

  $(document).ready(function() {
    let newBattle
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
    // console.log(newBattle);
    newBattle.playerTurn();
   battleStart();
    // newBattle.battleOver();
   // while(!newBattle.over) {
   //   newBattle.playerTurn();
   // }
   if (newBattle.over) {
     battleEnd();
   }
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
   newBattle = new Battle(newPlayer, hipster);
   // console.log("hipster", hipster);
   battleStart();
   // console.log(newBattle);
   // while(!newBattle.over) {
   //   newBattle.playerTurn();
   // }
   if (newBattle.winner === newPlayer) {
     // console.log(newBattle);
     alert("YOU WIN");
     $("#score").append("<li> Hipster Defeated!</li>");
     battleEnd();
   } else if (newBattle.winner === hipster) {
     alert("YOU LOSE");
     battleEnd();
   }
  });
  $("#haiku").submit((event) => {
    event.preventDefault();
    newBattle.playerTurn();
    });
});

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
