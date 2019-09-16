export class Player {
  constructor() {
    this.health = 100;
  }

  takeDamage(dmgAmount) {
    this.health -= dmgAmount;
  }

  
}
