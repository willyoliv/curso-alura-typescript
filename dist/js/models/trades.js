export class Trades {
    constructor() {
        this.trades = [];
    }
    add(trading) {
        this.trades.push(trading);
    }
    list() {
        return this.trades;
    }
}
