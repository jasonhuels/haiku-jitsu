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
    let randomIndex = Math.floor(Math.random()*this.haikus.length);
    return this.haikus[randomIndex];
  }

  checkDefeated() {
    let defeated = false;
    if(this.health <= 0) {
      defeated = true;
    }
    return defeated;
  }
}

export class Hippie extends Enemy {
  constructor(health) {
    super(health);
    this.keywords = ["flower", "love", "incense", "groovy", "psychedelic", "peace", "dude", "aura"];
    this.haikus = [];
    this.haikus[0] = ["Hey dude like chill out", "my birkenstocks are busted", "Um... I like need a minute"];
    this.haikus[1] = ["They call me Love Child", "Patchouli is my incense", "Rose is my flower"];
    this.haikus[2] = ["Dude, radical waves.", "breaking upon my brain box.", "Tides between my ears"];
    this.haikus[3] = ["Peace and love are great", "The Grateful Dead are better", "Have you heard Phish yet?"];
    this.haikus[4] = ["Hey man, be nice dude", "Don't harsh my buzz, I'm tripping", "I'm feeling groovy"];
    this.haikus[5] = ["Dude don't drag me down", "your aura's all askew and", "I'm too high to fight"];
  }

}

export class Hipster extends Enemy {
  constructor(health) {
    super(health);
    this.keywords = ["micro-brew", "vinyl", "fixed-gear", "mustache", "fedora", "exclusive", "small-batch", "artisan"];
    this.haikus = [];
    this.haikus[0] = ["I write lots of haikus", "but you would'nt get them", "..."];
    this.haikus[1] = ["Where can I get some", "post-ironic micro-brew", "small-batch kombucha?"];
    this.haikus[2] = ["My band is on tour", "with a band you've never heard of", "it's that exclusive"];
    this.haikus[3] = ["My mustache got stuck", "in a bespoke fixed-gear bike", "lost my fedora"];
    this.haikus[4] = ["Hyphonated words", "are the vinyl of language", "artisan delight!"];
    this.haikus[5] = ["Free-box foraging", "flannel fashion, frankly", "I'm a trend setter."];
  }

}
