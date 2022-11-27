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
    const date = new Date(this._date.getDate());
    return date;
  }
}
