export class Die {
  public roll(): number {
    return Math.floor(Math.random() * 6) + 1;
  }
}
