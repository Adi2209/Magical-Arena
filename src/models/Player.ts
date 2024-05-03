export class Player {
  private readonly health: number;

  private readonly strength: number;

  private readonly attack: number;

  constructor(health: number, strength: number, attack: number) {
    this.health = health;
    this.strength = strength;
    this.attack = attack;
  }
}
