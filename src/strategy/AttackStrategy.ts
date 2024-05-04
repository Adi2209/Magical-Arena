import { Die } from "../entities/Die";
import { Player } from "../entities/Player";

/**
 * Represents a strategy for performing attacks in the game.
 */
export class AttackStrategy {
  private readonly player: Player;

  private readonly die: Die;

  /**
   * Creates a new AttackStrategy instance.
   * @param {Player} player - The player associated with this attack strategy.
   */
  constructor(player: Player) {
    this.player = player;
    this.die = new Die();
  }

  /**
   * Performs an attack and returns the resulting damage.
   * @returns {number} - The damage caused by the attack.
   */
  public attack(): number {
    const dieRoll = this.die.roll();
    console.log(`${this.player.name} rolled the die and got: ${dieRoll}`);
    return dieRoll * this.player.attack;
  }
}
