import { Player } from "../../models/Player";
import { AttackStrategy } from "../AttackStrategy";


describe('AttackStrategy', () => {
  it('should return the correct attack damage', () => {
    const player = new Player(100, 10, 5,'TestPlayer');
    const attackStrategy = new AttackStrategy(player);
    const attackDamage = attackStrategy.attack();
    expect(attackDamage).toBeDefined();
    expect(attackDamage).toBeGreaterThan(0);
  });

  it('should log the die roll result', () => {
    const player = new Player(100, 10, 5,'TestPlayer');
    const attackStrategy = new AttackStrategy(player);
    const consoleSpy = jest.spyOn(console, 'log');
  
    const result = attackStrategy.attack();

    expect(consoleSpy).toHaveBeenCalledTimes(1);
    expect(result).toBeDefined();
    expect(result).toBeGreaterThan(0);
  });
});
