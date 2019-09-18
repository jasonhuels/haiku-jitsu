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
  $("#user-info").submit(function(event) {
    event.preventDefault();
    let nameOfPlayer = $("#name-field").val();
    $("#game-info-panel").show();
    $("#show-name").text(nameOfPlayer);
    $("#player-name").text(nameOfPlayer);
    $(".main-map").show();
    $("#main-game").addClass("add-background");
    $(".welcome-screen").hide();
  });


  $("#hippie").click(function() {
    $("#adversary").text("Hippie");
    $("#main-game").removeClass("add-background");
    $("#main-game").addClass("add-skulls");
    $("#adversary-avatar").html('<img src="https://www.pngkey.com/png/detail/60-608037_stick-figure-running-drawing-download-animation-free-stick.png" alt="a stick figure" height=200px>');
    newPlayer.health = 100;
    let hippie = new enemy.Hippie(100);
    newBattle = new Battle(newPlayer, hippie);
    battleStart();
  });


  $("#hipster").click(function() {
    $("#adversary").text("Hipster");
    $("#main-game").removeClass("add-background");
    $("#main-game").addClass("add-skulls");
      $("#adversary-avatar").html('<img src="https://t3.ftcdn.net/jpg/00/80/41/34/500_F_80413451_JpH4YrPvmiwINVAny8xpXYa2tFiLbkBl.jpg" height=200px>');
    newPlayer.health = 100;
    let hipster = new enemy.Hipster(100);
    newBattle = new Battle(newPlayer, hipster);
    battleStart();
  });


  $("#professor").click(function() {
    $("#adversary").text("Professor");
    $("#main-game").removeClass("add-background");
    $("#main-game").addClass("add-skulls");
      $("#adversary-avatar").html('<img src="https://media.istockphoto.com/vectors/cartoon-illustration-of-old-business-man-or-teacher-or-professor-at-vector-id847759486?k=6&m=847759486&s=612x612&w=0&h=K3-zZwYZZW5lzU46fZk-LHmKO7WwOjSlefCAakdndXQ=" height=200px>');
    newPlayer.health = 100;
    newPlayer.playerHealthBar();
    let professor = new enemy.Professor(100);
    newBattle = new Battle(newPlayer, professor);
    battleStart();
  });


  $(".singer").click(function() {
    $("#adversary").text("Goth");
    $("#main-game").removeClass("add-background");
    $("#main-game").addClass("add-skulls");
      $("#adversary-avatar").html('<img src="https://cdn.pixabay.com/photo/2013/07/12/17/13/exhausted-151822_960_720.png" height=200px>');

    newPlayer.health = 100;
    let singer = new enemy.Goth(100);
    newBattle = new Battle(newPlayer, singer);
    battleStart();
  });


  $("#hacker").click(function() {
    $("#adversary").text("Hacker");
    $("#main-game").removeClass("add-background");
    $("#main-game").addClass("add-skulls");
      $("#adversary-avatar").html('<img src="https://media.istockphoto.com/vectors/cyber-crime-doodle-vector-id518674300" height=200px>');
    newPlayer.health = 100;
    let hacker = new enemy.Hacker(100);
    newBattle = new Battle(newPlayer, hacker);
    battleStart();
  });


  $("#haiku").submit((event) => {
    event.preventDefault();
    newBattle.playerTurn();

    if (newBattle.over) {
      newBattle.battleEnd();
    }
  });
});

function battleStart() {
  $(".main-map").hide();
  $(".battle-frame").show();
  $("#main-game").removeClass("add-background");
}
