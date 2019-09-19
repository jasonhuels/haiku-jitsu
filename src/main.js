import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import {Player} from './player.js';
import * as enemy from './enemy.js';
import {haikuChecker} from './haikuChecker.js';
import {Battle} from './battle.js';
import {loadImages} from './loadImages.js';
import * as images from './loadImages.js';


  let newPlayer = new Player();
$(document).ready(function() {
  let newBattle;
  loadImages();
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
    $("#adversary-avatar").html(`<img src='${images.getHippie()}' alt="a stick figure" height=200px>`);
    newPlayer.health = 100;
    newPlayer.playerHealthBar();
    let hippie = new enemy.Hippie(100);
    newBattle = new Battle(newPlayer, hippie);
    battleStart();
  });


  $("#hipster").click(function() {
    $("#adversary").text("Hipster");
    $("#main-game").removeClass("add-background");
    $("#main-game").addClass("add-skulls");
      $("#adversary-avatar").html(`<img src="${images.getHipster()}" height=200px>`);
    newPlayer.health = 100;
    newPlayer.playerHealthBar();
    let hipster = new enemy.Hipster(100);
    newBattle = new Battle(newPlayer, hipster);
    battleStart();
  });


  $("#professor").click(function() {
    $("#adversary").text("Professor");
    $("#main-game").removeClass("add-background");
    $("#main-game").addClass("add-skulls");
      $("#adversary-avatar").html(`<img src="${images.getProfessor()}" height=200px>`);
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
      $("#adversary-avatar").html(`<img src="${images.getGoth()}" height=200px>`);

    newPlayer.health = 100;
    newPlayer.playerHealthBar();
    let singer = new enemy.Goth(100);
    newBattle = new Battle(newPlayer, singer);
    battleStart();
  });


  $("#hacker").click(function() {
    $("#adversary").text("Hacker");
    $("#main-game").removeClass("add-background");
    $("#main-game").addClass("add-skulls");
      $("#adversary-avatar").html(`<img src="${images.getHacker()}" height=200px>`);
    newPlayer.health = 100;
    newPlayer.playerHealthBar();
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
