import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import {Player} from './player.js';
import * as enemy from './enemy.js';
import {haikuChecker} from './haikuChecker.js'
import {Battle} from './battle.js'


$(function() {
  let player = new Player();
  let hippie = new enemy.Hippie(100);

  let bat1 = new Battle(player, hippie);
  bat1.playerTurn();

});
