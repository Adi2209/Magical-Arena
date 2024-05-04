import { Die } from "../entities/Die";
import { Player } from "../entities/Player";

/**
 * Represents a strategy for defending against attacks in the game.
 */
export class DefendStrategy {
  private readonly player: Player;

  private readonly die: Die;

  /**
   * Creates a new DefendStrategy instance.
   * @param {Player} player - The player associated with this defend strategy.
   */
  constructor(player: Player) {
    this.player = player;
    this.die = new Die();
  }

  /**
   * Performs a defense action and returns the resulting strength.
   * @returns {number} - The strength of the defense.
   */
  public defend(): number {
    const dieRoll = this.die.roll();
    console.log(`${this.player.name} rolled the die and got: ${dieRoll}`);
    return dieRoll * this.player.strength;
  }
}
