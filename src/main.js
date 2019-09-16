import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import {Player} from './player.js';
import * as enemy from './enemy.js';
import {haikuChecker} from './haikuChecker.js'
import {Battle} from './battle.js'

$(document).ready(function() {
  $("#user-info").submit(function(event){
      event.preventDefault();
     let nameOfPlayer = $("#name-field").val();
     // $(".row").show();

  });

  $("#score").append("<li>" +         + "</li>");
  let player = new Player();
  let hippie = new enemy.Hipster(100);

  let bat1 = new Battle(player, hippie);
  bat1.playerTurn();

});
