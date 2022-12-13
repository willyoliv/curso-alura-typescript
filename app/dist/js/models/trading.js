export class Trading {
    constructor(_date, quantity, value) {
        this._date = _date;
        this.quantity = quantity;
        this.value = value;
    }
    get amount() {
        return this.quantity * this.value;
    }
    get date() {
        const date = new Date(this._date);
        return date;
    }
    forText() {
        return `
      Date: ${this.date},
      Quantity: ${this.quantity},
      Value: ${this.value},
    `;
    }
    isEquals(trading) {
        return this.date.getDate() === trading.date.getDate()
            && this.date.getMonth() === trading.date.getMonth()
            && this.date.getFullYear() === trading.date.getFullYear();
    }
    static createTrading(dateString, quantityString, valueString) {
        const exp = /-/g;
        const date = new Date(dateString.replace(exp, ','));
        const quantity = parseInt(quantityString);
        const value = parseFloat(valueString);
        return new Trading(date, quantity, value);
    }
}
//# sourceMappingURL=trading.js.map