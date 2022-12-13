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
    forText() {
        return JSON.stringify(this.trades, null, 2);
    }
    isEquals(trading) {
        return JSON.stringify(this.trades) === JSON.stringify(trading);
    }
}
//# sourceMappingURL=trades.js.map