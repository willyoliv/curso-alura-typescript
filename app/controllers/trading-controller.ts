import { Trades } from "../models/trades.js";
import { Trading } from "../models/trading.js";

export class TradingController {
  private inputDate: HTMLInputElement;
  private inputQuantity: HTMLInputElement;
  private inputValue: HTMLInputElement;
  private trades = new Trades();

  constructor() {
    this.inputDate = document.querySelector('#date');
    this.inputQuantity = document.querySelector('#quantity');
    this.inputValue = document.querySelector('#value');
  }

  add(): void {
    const trading = this.createTrading();
    this.trades.add(trading);
    console.log(this.trades.list());
    this.cleanForm();
  }

  createTrading(): Trading {
    const exp = /-/g;
    const date = new Date(this.inputDate.value.replace(exp, ','));
    const quantity = parseInt(this.inputQuantity.value);
    const value = parseFloat(this.inputValue.value);
    return new Trading(date, quantity, value);
  }

  cleanForm(): void {
    this.inputDate.value = '';
    this.inputQuantity.value = '';
    this.inputValue.value = '';
    this.inputDate.focus();
  }
}