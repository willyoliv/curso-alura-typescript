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
    static createTrading(dateString, quantityString, valueString) {
        const exp = /-/g;
        const date = new Date(dateString.replace(exp, ','));
        const quantity = parseInt(quantityString);
        const value = parseFloat(valueString);
        return new Trading(date, quantity, value);
    }
}
