import { Player } from "./models/Player";
import { AttackStrategy } from "./strategy/AttackStrategy";
import { DefendStrategy } from "./strategy/DefendStrategy";
import { Game } from "./Game";
// health strength attack name
const playerA = new Player(40, 10, 10, "Player A");
const playerB = new Player(50, 10, 10, "Player B");

const attackStrategyA = new AttackStrategy(playerA);
const attackStrategyB = new AttackStrategy(playerB);

const defendStrategyA = new DefendStrategy(playerA);
const defendStrategyB = new DefendStrategy(playerB);

const game = new Game(playerA, attackStrategyA, defendStrategyA, playerB, attackStrategyB, defendStrategyB);
game.startGame();
