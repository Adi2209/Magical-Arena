import { Player } from "./models/Player";
import { AttackStrategy } from "./strategy/AttackStrategy";
import { DefendStrategy } from "./strategy/DefendStrategy";

export class Game {
  private readonly playerA: Player;
  private readonly playerB: Player;
  private readonly attackStrategyA: AttackStrategy;
  private readonly attackStrategyB: AttackStrategy;
  private readonly defendStrategyA: DefendStrategy;
  private readonly defendStrategyB: DefendStrategy;

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

  public startGame(): void {
    console.log("Game started!");

    const firstAttacker = this.getFirstAttacker();
    const secondAttacker = firstAttacker === this.playerA ? this.playerB : this.playerA;

    while (this.playerA.health > 0 && this.playerB.health > 0) {
      this.executeRound(firstAttacker, secondAttacker);
      if (this.playerA.health <= 0 || this.playerB.health <= 0) break;
      this.executeRound(secondAttacker, firstAttacker);
    }

    console.log(`${this.getWinner()} wins!`);
  }

  private executeRound(attacker: Player, defender: Player):void {
    console.log(`${attacker.name} is attacking ${defender.name}...`);
    const attackDamage = this.getAttackDamage(attacker);
    const defendStrength = this.getDefendStrength(defender);
    const damageTaken = Math.max(attackDamage - defendStrength, 0);
    defender.health -= damageTaken;
    console.log(`${attacker.name} dealt ${attackDamage} damage to ${defender.name}.`);
    console.log(`${defender.name}'s health reduced to ${defender.health}`);
  }

  private getFirstAttacker(): Player {
    return this.playerA.health <= this.playerB.health ? this.playerA : this.playerB;
  }

  private getAttackDamage(attacker: Player): number {
    return attacker === this.playerA ? this.attackStrategyA.attack() : this.attackStrategyB.attack();
  }

  private getDefendStrength(defender: Player): number {
    return defender === this.playerA ? this.defendStrategyA.defend() : this.defendStrategyB.defend();
  }

  private getWinner(): string {
    return this.playerA.health <= 0 ? this.playerB.name : this.playerA.name;
  }
}
