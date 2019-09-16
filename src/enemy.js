export class Enemy {
  constructor(health) {
    this.health = health;
    this.keywords = [];
  }

  takeDamage(dmgAmount) {
    this.health -= dmgAmount;
  }

  attack() {
    // pick a random haiku and calculate damage
  }
}

export class Hippie {
  constructor(health) {
    this.health = health;
    this.keywords = ["flower", "love", "incense", "groovy", "psychedelic"];
  }
}
