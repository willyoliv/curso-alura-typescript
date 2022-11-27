import type { Trading } from "./trading.js";

export class Trades {
  private trades: Trading[] = [];

  add(trading: Trading): void {
    this.trades.push(trading);
  }

  list(): readonly Trading[] {
    return this.trades;
  }
}
