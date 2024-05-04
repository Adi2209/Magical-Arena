import { Game } from "../Game";
import { Player } from "../models/Player";
import { AttackStrategy } from "../strategy/AttackStrategy";
import { DefendStrategy } from "../strategy/DefendStrategy";

describe("Game", () => {
  let playerA: Player;
  let playerB: Player;
  let attackStrategyA: AttackStrategy;
  let attackStrategyB: AttackStrategy;
  let defendStrategyA: DefendStrategy;
  let defendStrategyB: DefendStrategy;
  let game: Game;

  beforeEach(() => {
    playerA = new Player(100, 10, 5, "Player A");
    playerB = new Player(100, 10, 5, "Player B");
    attackStrategyA = new AttackStrategy(playerA);
    attackStrategyB = new AttackStrategy(playerB);
    defendStrategyA = new DefendStrategy(playerA);
    defendStrategyB = new DefendStrategy(playerB);
    game = new Game(
      playerA,
      attackStrategyA,
      defendStrategyA,
      playerB,
      attackStrategyB,
      defendStrategyB
    );
  });

  it("should simulate the game and declare a winner", () => {
    // Assuming Player A wins
    playerB.health = 0;
    const consoleLogSpy = jest.spyOn(console, "log");
    game.startGame();
    expect(consoleLogSpy).toHaveBeenCalledWith("Player A wins!");
  });

  it("should return the player with lower health as the first attacker", () => {
    playerA.health = 50;
    playerB.health = 100;
    expect((game as any).getFirstAttacker()).toEqual(playerA);
    playerA.health = 100;
    playerB.health = 50;
    expect((game as any).getFirstAttacker()).toEqual(playerB);
  });

  it("should return the correct attack damage based on the attacker", () => {
    const attackDamageA = (game as any).getAttackDamage(playerA);
    const attackDamageB = (game as any).getAttackDamage(playerB);
    expect(attackDamageA).toBeDefined();
    expect(attackDamageA).toBeGreaterThan(0);
    expect(attackDamageB).toBeDefined();
    expect(attackDamageB).toBeGreaterThan(0);
  });

  it("should return the correct defend strength based on the defender", () => {
    const defendStrengthA = (game as any).getDefendStrength(playerA);
    const defendStrengthB = (game as any).getDefendStrength(playerB);
    expect(defendStrengthA).toBeDefined();
    expect(defendStrengthA).toBeGreaterThan(0);
    expect(defendStrengthB).toBeDefined();
    expect(defendStrengthB).toBeGreaterThan(0);
  });

  it("should return the correct winner", () => {
    playerA.health = 0;
    playerB.health = 100;
    expect((game as any).getWinner()).toEqual(playerB.name);
    playerA.health = 100;
    playerB.health = 0;
    expect((game as any).getWinner()).toEqual(playerA.name);
  });

  it("should handle errors during the game", () => {
    jest.spyOn(game as any, "executeRound").mockImplementation(() => {
      throw new Error("Simulated error");
    });

    const consoleLogSpy = jest.spyOn(console, "log");

    game.startGame();

    expect(consoleLogSpy).toHaveBeenCalledWith("Failed to run the game due to error: Error: Simulated error");
  });

  it("should execute a round of attack and defense", () => {
    const consoleLogSpy = jest.spyOn(console, "log");

    (game as any).executeRound(playerA, playerB);

    expect(consoleLogSpy).toHaveBeenCalledTimes(15);
  });

  it("should return the winner in break condition", () => {
    playerA = new Player(100, 10, 10, "Player A");
    playerB = new Player(10, 5, 5, "Player B");
    attackStrategyA = new AttackStrategy(playerA);
    attackStrategyB = new AttackStrategy(playerB);
    defendStrategyA = new DefendStrategy(playerA);
    defendStrategyB = new DefendStrategy(playerB);
    game = new Game(
      playerA,
      attackStrategyA,
      defendStrategyA,
      playerB,
      attackStrategyB,
      defendStrategyB
    );
    game.startGame();
    expect((game as any).getWinner()).toEqual(playerA.name);
  });

  it("should return the winner ", () => {
    playerA = new Player(100, 10, 10, "Player A");
    playerB = new Player(10, 5, 5, "Player B");
    (game as any).executeRound(playerA, playerB);
    expect((game as any).getWinner()).toEqual(playerA.name);
  });


});

describe('Tests without beforeAll', ()=>{
  it("should return the winner in break condition", () => {
    const player1 = new Player(10, 10, 10, "Player A");
    const player2 = new Player(5, 5, 50, "Player B");
    const attackStrategy1 = new AttackStrategy(player1);
    const attackStrategy2 = new AttackStrategy(player2);
    const defendStrategy1 = new DefendStrategy(player1);
    const defendStrategy2 = new DefendStrategy(player2);
    const game = new Game(
      player1,
      attackStrategy1,
      defendStrategy1,
      player2,
      attackStrategy2,
      defendStrategy2
    );
    game.startGame();
    expect((game as any).getWinner()).toEqual(player2.name);
  });
  it("should have playerB as the first attacker", () => {
    const player1 = new Player(10, 10, 10, "Player A");
    const player2 = new Player(150, 5, 50, "Player B");
    const attackStrategy1 = new AttackStrategy(player1);
    const attackStrategy2 = new AttackStrategy(player2);
    const defendStrategy1 = new DefendStrategy(player1);
    const defendStrategy2 = new DefendStrategy(player2);
    const game = new Game(
      player1,
      attackStrategy1,
      defendStrategy1,
      player2,
      attackStrategy2,
      defendStrategy2
    );
    game.startGame();
    expect((game as any).getWinner()).toEqual(player2.name);
  });
})
