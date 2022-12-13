import { Model } from "../interfaces/model.js";
import type { Trading } from "./trading.js";

export class Trades implements Model<Trading> {
  private trades: Trading[] = [];
  
  public add(trading: Trading): void {
    this.trades.push(trading);
  }

  public list(): readonly Trading[] {
    return this.trades;
  }
  
  public forText(): string {
    return JSON.stringify(this.trades, null, 2);
  }

  public isEquals(trading: Trading): boolean {
    return JSON.stringify(this.trades) === JSON.stringify(trading);
  }
}
