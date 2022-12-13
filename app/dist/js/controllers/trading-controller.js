var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
    constructor() {
        this.trades = new Trades();
        this.tradesView = new TradesView('#tradesView');
        this.messageView = new MessageView('#messageView');
        this.tradingService = new TradingService();
        this.tradesView.update(this.trades);
    }
    add() {
        const trading = Trading.createTrading(this.inputDate.value, this.inputQuantity.value, this.inputValue.value);
        if (!this.isBusinessDay(trading.date)) {
            this.messageView.update('Only business day trades are accepted');
            return;
        }
        this.trades.add(trading);
        print(trading, this.trades);
        this.cleanForm();
        this.updateView();
    }
    importData() {
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
    isBusinessDay(date) {
        return date.getDay() > DaysOfWeek.SUNDAY && date.getDay() < DaysOfWeek.SATURDAY;
    }
    cleanForm() {
        this.inputDate.value = '';
        this.inputQuantity.value = '';
        this.inputValue.value = '';
        this.inputDate.focus();
    }
    updateView() {
        this.tradesView.update(this.trades);
        this.messageView.update('Negociação adicionada com sucesso');
    }
}
__decorate([
    domInjector('#date')
], TradingController.prototype, "inputDate", void 0);
__decorate([
    domInjector('#quantity')
], TradingController.prototype, "inputQuantity", void 0);
__decorate([
    domInjector('#value')
], TradingController.prototype, "inputValue", void 0);
__decorate([
    inspect,
    logRuntime()
], TradingController.prototype, "add", null);
//# sourceMappingURL=trading-controller.js.map