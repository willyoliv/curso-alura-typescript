import { DaysOfWeek } from "../enums/days-of-week.js";
import { Trades } from "../models/trades.js";
import { Trading } from "../models/trading.js";
import { MessageView } from "../views/message-view.js";
import { TradesView } from "../views/trades-view.js";
export class TradingController {
    constructor() {
        this.trades = new Trades();
        this.tradesView = new TradesView('#tradesView', true);
        this.messageView = new MessageView('#messageView');
        this.inputDate = document.querySelector('#date');
        this.inputQuantity = document.querySelector('#quantity');
        this.inputValue = document.querySelector('#value');
        this.tradesView.update(this.trades);
    }
    add() {
        const trading = Trading.createTrading(this.inputDate.value, this.inputQuantity.value, this.inputValue.value);
        if (!this.isBusinessDay(trading.date)) {
            this.messageView.update('Only business day trades are accepted');
            return;
        }
        this.trades.add(trading);
        this.cleanForm();
        this.updateView();
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
