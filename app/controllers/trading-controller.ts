import { DaysOfWeek } from "../enums/days-of-week.js";
import { Trades } from "../models/trades.js";
import { Trading } from "../models/trading.js";
import { MessageView } from "../views/message-view.js";
import { TradesView } from "../views/trades-view.js";

export class TradingController {
  private inputDate: HTMLInputElement;
  private inputQuantity: HTMLInputElement;
  private inputValue: HTMLInputElement;
  private trades = new Trades();
  private tradesView = new TradesView('#tradesView', true);
  private messageView = new MessageView('#messageView');

  constructor() {
    this.inputDate = document.querySelector('#date') as HTMLInputElement;
    this.inputQuantity = document.querySelector('#quantity') as HTMLInputElement;
    this.inputValue = document.querySelector('#value') as HTMLInputElement;
    this.tradesView.update(this.trades);
  }

  public add(): void {
    const trading = Trading.createTrading(
      this.inputDate.value,
      this.inputQuantity.value,
      this.inputValue.value
    );

    if (!this.isBusinessDay(trading.date)) {
      this.messageView.update('Only business day trades are accepted');
      return;
    }

    this.trades.add(trading);
    this.cleanForm();
    this.updateView();

  }

  private isBusinessDay(date: Date): boolean {
    return date.getDay() > DaysOfWeek.SUNDAY && date.getDay() < DaysOfWeek.SATURDAY;
  }

  private cleanForm(): void {
    this.inputDate.value = '';
    this.inputQuantity.value = '';
    this.inputValue.value = '';
    this.inputDate.focus();
  }

  private updateView(): void {
    this.tradesView.update(this.trades);
    this.messageView.update('Negociação adicionada com sucesso')
  }
}