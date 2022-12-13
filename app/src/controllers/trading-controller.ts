import { logRuntime } from "../decorators/log-runtime.js";
import { inspect } from "../decorators/inspect.js";
import { DaysOfWeek } from "../enums/days-of-week.js";
import { Trades } from "../models/trades.js";
import { Trading } from "../models/trading.js";
import { MessageView } from "../views/message-view.js";
import { TradesView } from "../views/trades-view.js";
import { domInjector } from "../decorators/dom-injector.js";
import { TradingService } from "../services/trading-service.js";
import { print } from "../utils/print.js";

export class TradingController {
  @domInjector('#date')
  private inputDate: HTMLInputElement;
  @domInjector('#quantity')
  private inputQuantity: HTMLInputElement;
  @domInjector('#value')
  private inputValue: HTMLInputElement;
  private trades = new Trades();
  private tradesView = new TradesView('#tradesView');
  private messageView = new MessageView('#messageView');
  private tradingService = new TradingService();

  constructor() {
    this.tradesView.update(this.trades);
  }

  @inspect
  @logRuntime()
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
    print(trading, this.trades);
    this.cleanForm();
    this.updateView();
  }

  public importData(): void {
    this.tradingService
      .getDaysTrades()
      .then(todaysTrading => {
        return todaysTrading.filter(tradingToday => {
          return !this.trades
            .list()
            .some(trading => trading.isEquals(tradingToday));
        });
      })
      .then(todaysTrading => {
        for (let trade of todaysTrading) {
          this.trades.add(trade);
        }
        this.tradesView.update(this.trades);
      });
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