/**
 * Represents a six-sided die.
 */
export class Die {
  /**
   * Rolls the die and returns a random number between 1 and 6.
   * @returns {number} The result of the die roll.
   */
  public roll(): number {
    return Math.floor(Math.random() * 6) + 1;
  }
}
