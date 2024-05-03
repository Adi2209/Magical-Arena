import { Die } from "../models/Die";
import { Player } from "../models/Player";

export class DefendStrategy {
  private readonly player: Player;

  private readonly die: Die;

  constructor(player: Player) {
    this.player = player;
    this.die = new Die();
  }

  public defend(): number {
    const dieRoll = this.die.roll();
    console.log(`${this.player.name} rolled the die and got: ${dieRoll}`);
    return dieRoll* this.player.strength;
  }
}
