import type { Trading } from "./trading.js";

export class Trades {
  private trades: Trading[] = [];

  public add(trading: Trading): void {
    this.trades.push(trading);
  }

  public list(): readonly Trading[] {
    return this.trades;
  }
}
