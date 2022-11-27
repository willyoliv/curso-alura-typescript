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
        const date = new Date(this._date.getDate());
        return date;
    }
}
