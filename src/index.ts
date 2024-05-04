import { Player } from "./models/Player";
import { AttackStrategy } from "./strategy/AttackStrategy";
import { DefendStrategy } from "./strategy/DefendStrategy";
import { Game } from "./Game";
import { PlayerValidator } from "./PlayerValidator";

// health, strength, attack, name
const playerA = new Player(40, 10, 10, "Player A");
const playerB = new Player(50, 10, 10, "Player B");

// Validate the players' attributes
if (!PlayerValidator.validate(playerA) || !PlayerValidator.validate(playerB)) {
  console.log("Invalid player attributes. Please check the player details.");
} else {
  const attackStrategyA = new AttackStrategy(playerA);
  const attackStrategyB = new AttackStrategy(playerB);

  const defendStrategyA = new DefendStrategy(playerA);
  const defendStrategyB = new DefendStrategy(playerB);

  const game = new Game(playerA, attackStrategyA, defendStrategyA, playerB, attackStrategyB, defendStrategyB);
  game.startGame();
}
