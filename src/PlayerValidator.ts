import { Player } from "./entities/Player";

/**
 * A utility class for validating player attributes.
 */
export class PlayerValidator {
  /**
   * Validates the attributes of a player.
   * @param player - The player whose attributes need to be validated.
   * @returns True if the player attributes are valid, otherwise false.
   */
  public static validate(player: Player): boolean {
    // Check if any of the player attributes are invalid
    if (
      player.health <= 0 ||
      player.strength <= 0 ||
      player.attack <= 0 ||
      player.name.trim() === ""
    ) {
      return false;
    }
    return true;
  }
}
