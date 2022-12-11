export class Trading {

  constructor(
    private _date: Date,
    public readonly quantity: number,
    public readonly value: number,
  ) { }

  get amount(): number {
    return this.quantity * this.value;
  }

  get date(): Date {
    // const date = new Date(this._date.getDate());
    const date = new Date(this._date);
    return date;
  }

  public static createTrading(dateString: string, quantityString: string, valueString: string): Trading {
    const exp = /-/g;
    const date = new Date(dateString.replace(exp, ','));
    const quantity = parseInt(quantityString);
    const value = parseFloat(valueString);
    return new Trading(date, quantity, value);
  }
}
