import { Player } from "../models/Player";
import { PlayerValidator } from "../PlayerValidator";


describe("PlayerValidator", () => {
  describe("validate", () => {
    it("should return true for valid player attributes", () => {
      const validPlayer: Player = {
        health: 100,
        strength: 50,
        attack: 20,
        name: "Valid Player"
      };
      expect(PlayerValidator.validate(validPlayer)).toBe(true);
    });

    it("should return false if health is zero", () => {
      const playerWithZeroHealth: Player = {
        health: 0,
        strength: 50,
        attack: 20,
        name: "Player with Zero Health"
      };
      expect(PlayerValidator.validate(playerWithZeroHealth)).toBe(false);
    });

    it("should return false if strength is zero", () => {
      const playerWithZeroStrength: Player = {
        health: 100,
        strength: 0,
        attack: 20,
        name: "Player with Zero Strength"
      };
      expect(PlayerValidator.validate(playerWithZeroStrength)).toBe(false);
    });

    it("should return false if attack is zero", () => {
      const playerWithZeroAttack: Player = {
        health: 100,
        strength: 50,
        attack: 0,
        name: "Player with Zero Attack"
      };
      expect(PlayerValidator.validate(playerWithZeroAttack)).toBe(false);
    });

    it("should return false if name is empty", () => {
      const playerWithEmptyName: Player = {
        health: 100,
        strength: 50,
        attack: 20,
        name: ""
      };
      expect(PlayerValidator.validate(playerWithEmptyName)).toBe(false);
    });

    it("should return false if name contains only whitespace", () => {
      const playerWithWhitespaceName: Player = {
        health: 100,
        strength: 50,
        attack: 20,
        name: "    "
      };
      expect(PlayerValidator.validate(playerWithWhitespaceName)).toBe(false);
    });
  });
});
