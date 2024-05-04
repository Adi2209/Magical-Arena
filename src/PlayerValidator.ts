import { Player } from "./models/Player";

export class PlayerValidator {
  static validate(player: Player): boolean {
    if (player.health <= 0 || player.strength <= 0 || player.attack <= 0 || player.name.trim() === "") {
      return false;
    }
    return true;
  }
}