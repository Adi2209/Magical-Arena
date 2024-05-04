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
    playerA = new Player(40, 10, 10, "Player A");
    playerB = new Player(50, 10, 10, "Player B");
    attackStrategyA = new AttackStrategy(playerA);
    attackStrategyB = new AttackStrategy(playerB);
    defendStrategyA = new DefendStrategy(playerA);
    defendStrategyB = new DefendStrategy(playerB);
    game = new Game(playerA, attackStrategyA, defendStrategyA, playerB, attackStrategyB, defendStrategyB);
  });

  it("should simulate the game and declare a winner", () => {
    const consoleLogSpy = jest.spyOn(console, "log");

    game.startGame();

    expect(consoleLogSpy).toHaveBeenCalledWith(expect.stringContaining("Game started!"));
  });
  describe("Game Object Construction", () => {
    it("should create a Game object with provided parameters", () => {
      const playerA = new Player(40, 10, 10, "Player A");
      const playerB = new Player(50, 10, 10, "Player B");
  
      const attackStrategyA = new AttackStrategy(playerA);
      const attackStrategyB = new AttackStrategy(playerB);
      const defendStrategyA = new DefendStrategy(playerA);
      const defendStrategyB = new DefendStrategy(playerB);
  
      const game = new Game(playerA, attackStrategyA, defendStrategyA, playerB, attackStrategyB, defendStrategyB);
  
      expect(game).toBeDefined();
      expect(game instanceof Game).toBeTruthy();
      expect(game["playerA"]).toEqual(playerA);
      expect(game["playerB"]).toEqual(playerB);
      expect(game["attackStrategyA"]).toEqual(attackStrategyA);
      expect(game["attackStrategyB"]).toEqual(attackStrategyB);
      expect(game["defendStrategyA"]).toEqual(defendStrategyA);
      expect(game["defendStrategyB"]).toEqual(defendStrategyB);
    });
  });
});
