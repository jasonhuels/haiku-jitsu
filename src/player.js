export class Player {
  constructor() {
    this.health = 100;
    this.keywords = [];
  }

  takeDamage(dmgAmount) {
    this.health -= dmgAmount;
  }

  checkDefeated() {
    let defeated = false;
    if(this.health <= 0) {
      defeated = true;
    }
    return defeated;
  }
}
