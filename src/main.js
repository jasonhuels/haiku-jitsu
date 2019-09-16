import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
var syllable = require('syllable')


$(document).ready (function() {
  $("#user-info").submit(function(event){
      event.preventDefault();
     let nameOfPlayer = $("#name-field").val();



     $("#score").append("<li>" +         + "</li>");



  });
});
