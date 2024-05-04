import { Player } from "../../entities/Player";
import { DefendStrategy } from "../DefendStrategy";

describe("DefendStrategy", () => {
  it("should return the correct defend strength", () => {
    const player = new Player(100, 10, 5, "TestPlayer");
    const defendStrategy = new DefendStrategy(player);
    const defendStrength = defendStrategy.defend();
    expect(defendStrength).toBeDefined();
    expect(defendStrength).toBeGreaterThan(0);
  });

  it("should log the die roll result", () => {
    const player = new Player(100, 10, 5, "TestPlayer");
    const defendStrategy = new DefendStrategy(player);
    const consoleSpy = jest.spyOn(console, "log");

    const defendStrength = defendStrategy.defend();

    expect(consoleSpy).toHaveBeenCalledTimes(1);
    expect(defendStrength).toBeDefined();
    expect(defendStrength).toBeGreaterThan(0);
  });
});
