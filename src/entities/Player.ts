/**
 * Represents a player in the game.
 */
export class Player {
  /**
   * The health points of the player.
   */
  public health: number;

  /**
   * The strength of the player.
   */
  public readonly strength: number;

  /**
   * The attack power of the player.
   */
  public readonly attack: number;

  /**
   * The name of the player.
   */
  public readonly name: string;

  /**
   * Creates a new Player instance.
   * @param {number} health - The health points of the player.
   * @param {number} strength - The strength of the player.
   * @param {number} attack - The attack power of the player.
   * @param {string} name - The name of the player.
   */
  constructor(health: number, strength: number, attack: number, name: string) {
    this.health = health;
    this.strength = strength;
    this.attack = attack;
    this.name = name;
  }
}
