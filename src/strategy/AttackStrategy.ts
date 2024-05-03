import { Die } from "../models/Die";
import { Player } from "../models/Player";

export class AttackStrategy {
  private readonly player: Player;

  private readonly die: Die;

  constructor(player: Player) {
    this.player = player;
    this.die = new Die();
  }
  public attack(): number{
    return this.die.roll() * this.player.attack;
  }
}
