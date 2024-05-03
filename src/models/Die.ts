export class Die {
  roll(): number {
    return Math.floor(Math.random() * 6) + 1;
  }
}
