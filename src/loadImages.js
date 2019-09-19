import hippie from './img/hippie.png';
import hacker from './img/hackerfinal.gif';
import hipster from './img/hipster.png';
import professor from './img/professor.png';
import goth from './img/goth.png';


export function loadImages() {
  const HIPPIE = document.getElementById('hippie');
  const HACKER = document.getElementById('hacker');
  const HIPSTER= document.getElementById('hipster');
  const PROFESSOR = document.getElementById('professor');
  const GOTH = document.getElementById('singer');

  HIPPIE.src = hippie;
  HACKER.src = hacker;
  HIPSTER.src = hipster;
  PROFESSOR.src = professor;
  GOTH.src = goth;

}


export function getHippie() {
  return hippie;
}

export function getHipster() {
  return hipster;
}
export function getHacker() {
  return hacker;
}
export function getProfessor() {
  return professor;
}

export function getGoth() {
  return goth;
}
