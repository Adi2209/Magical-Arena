import { Player } from "./entities/Player";
import { AttackStrategy } from "./strategy/AttackStrategy";
import { DefendStrategy } from "./strategy/DefendStrategy";
import { Game } from "./Game";
import { PlayerValidator } from "./PlayerValidator";

/**
 * Represents a simple game simulation between two players.
 * If players' attributes are valid, the game starts; otherwise, an error message is displayed.
 * Player Attributes are :
 * Health: Represents the current health points of the player.
 * Strength: Represents the defensive strength of the player.
 * Attack: Represents the offensive attack power of the player.
 * Name: Represents the name or identifier of the player.
 */

const playerA = new Player(40, 10, 10, "Player A");
const playerB = new Player(50, 10, 10, "Player B");

// Validate the players' attributes
if (!PlayerValidator.validate(playerA) || !PlayerValidator.validate(playerB)) {
  console.log("Invalid player attributes. Please check the player details.");
} else {
  // Create attack and defend strategies for each player
  const attackStrategyA = new AttackStrategy(playerA);
  const attackStrategyB = new AttackStrategy(playerB);
  const defendStrategyA = new DefendStrategy(playerA);
  const defendStrategyB = new DefendStrategy(playerB);

  // Initialize the game with the players and their strategies
  const game = new Game(
    playerA,
    attackStrategyA,
    defendStrategyA,
    playerB,
    attackStrategyB,
    defendStrategyB
  );

  game.startGame();
}
