import hippie from './img/hippie.png';
import hacker from './img/hackerfinal.gif';
import hipster from './img/hipster.png';
import professor from './img/professor.png';

export function loadImages() {
  const HIPPIE = document.getElementById('hippie');
  const HACKER = document.getElementById('hacker');
  const HIPSTER= document.getElementById('hipster');
  const PROFESSOR = document.getElementById('professor');

  HIPPIE.src = hippie;
  HACKER.src = hacker;
  HIPSTER.src = hipster;
  PROFESSOR.src = professor;
}
