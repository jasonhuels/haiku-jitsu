export class Enemy {
  constructor(health) {
    this.health = health;
    this.keywords = [];
    this.haikus = [];
  }

  takeDamage(dmgAmount) {
    this.health -= dmgAmount;
  }

  attack() {
    let randomIndex = Math.floor(Math.random()*5);
    return this.haikus[randomIndex];
  }
}

export class Hippie extends Enemy {
  constructor(health) {
    super(health);
    this.keywords = ["flower", "love", "incense", "groovy", "psychedelic", "peace", "dude"];
    this.haikus = [];
    this.haikus[0] = ["Hey man, be nice dude", "Don't harsh my buzz, I'm tripping", "I'm feeling groovy"];
    this.haikus[1] = ["They call me Love Child", "Patchouli is my incense", "Rose is my flower"]
    this.haikus[2] = ["Dude, radical waves.", "breaking upon my brain box.", "Tides between my ears"];
    this.haikus[3] = ["Peace and love are great", "The Grateful Dead are better", "Have you heard Phish yet?"];
    this.haikus[4] = ["Hey dude like chill out", "my birkenstocks are busted", "Um... I like need a minute"];
  }

}
