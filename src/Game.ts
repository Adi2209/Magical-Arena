import { Player } from "./entities/Player";
import { AttackStrategy } from "./strategy/AttackStrategy";
import { DefendStrategy } from "./strategy/DefendStrategy";

/**
 * Represents a game between two players with attack and defend strategies.
 */
export class Game {
  private readonly playerA: Player;

  private readonly playerB: Player;

  private readonly attackStrategyA: AttackStrategy;

  private readonly attackStrategyB: AttackStrategy;

  private readonly defendStrategyA: DefendStrategy;

  private readonly defendStrategyB: DefendStrategy;

  /**
   * Creates a new Game instance.
   * @param {Player} playerA - The first player.
   * @param {AttackStrategy} attackStrategyA - The attack strategy for the first player.
   * @param {DefendStrategy} defendStrategyA - The defend strategy for the first player.
   * @param {Player} playerB - The second player.
   * @param {AttackStrategy} attackStrategyB - The attack strategy for the second player.
   * @param {DefendStrategy} defendStrategyB - The defend strategy for the second player.
   */
  constructor(
    playerA: Player,
    attackStrategyA: AttackStrategy,
    defendStrategyA: DefendStrategy,
    playerB: Player,
    attackStrategyB: AttackStrategy,
    defendStrategyB: DefendStrategy
  ) {
    this.playerA = playerA;
    this.attackStrategyA = attackStrategyA;
    this.defendStrategyA = defendStrategyA;
    this.playerB = playerB;
    this.attackStrategyB = attackStrategyB;
    this.defendStrategyB = defendStrategyB;
  }

  /**
   * Starts the game simulation.
   */
  public startGame(): void {
    try {
      console.log("Game started!");

      const firstAttacker = this.getFirstAttacker();
      const secondAttacker =
        firstAttacker === this.playerA ? this.playerB : this.playerA;

      while (this.playerA.health > 0 && this.playerB.health > 0) {
        this.executeRound(firstAttacker, secondAttacker);
        if (this.playerA.health <= 0 || this.playerB.health <= 0) break;
        this.executeRound(secondAttacker, firstAttacker);
      }

      console.log(`${this.getWinner()} wins!`);
    } catch (error) {
      console.log(`Failed to run the game due to error: ${error}`);
    }
  }

  /**
   * Executes a round of attack and defense between two players.
   * @param {Player} attacker - The attacking player.
   * @param {Player} defender - The defending player.
   */
  private executeRound(attacker: Player, defender: Player): void {
    console.log(`${attacker.name} is attacking ${defender.name}...`);
    const attackDamage = this.getAttackDamage(attacker);

    console.log(`${attacker.name}'s attack strength: ${attackDamage}`);
    const defendStrength = this.getDefendStrength(defender);

    console.log(`${defender.name}'s defense strength: ${defendStrength}`);
    const damageTaken = Math.max(attackDamage - defendStrength, 0);

    defender.health -= damageTaken;
    console.log(
      `${attacker.name} dealt ${damageTaken} damage to ${defender.name}.`
    );
    console.log(`${defender.name}'s health reduced to ${defender.health}`);
  }

  /**
   * Determines which player attacks first based on their health.
   * @returns {Player} - The player who attacks first.
   */
  private getFirstAttacker(): Player {
    return this.playerA.health <= this.playerB.health
      ? this.playerA
      : this.playerB;
  }

  /**
   * Retrieves the attack damage of a player based on their attack strategy.
   * @param {Player} attacker - The attacking player.
   * @returns {number} - The attack damage.
   */
  private getAttackDamage(attacker: Player): number {
    return attacker === this.playerA
      ? this.attackStrategyA.attack()
      : this.attackStrategyB.attack();
  }

  /**
   * Retrieves the defend strength of a player based on their defend strategy.
   * @param {Player} defender - The defending player.
   * @returns {number} - The defend strength.
   */
  private getDefendStrength(defender: Player): number {
    return defender === this.playerA
      ? this.defendStrategyA.defend()
      : this.defendStrategyB.defend();
  }

  /**
   * Determines the winner of the game based on the players' health.
   * @returns {string} - The name of the winning player.
   */
  private getWinner(): string {
    return this.playerA.health <= 0 ? this.playerB.name : this.playerA.name;
  }
}
