import { escape } from "../decorators/escape.js";
import { Trades } from "../models/trades.js";
import { View } from "./view.js";

export class TradesView extends View<Trades> {
  @escape
  protected template(model: Trades): string {
    return `
      <table class="table table-hover table-bordered">
        <thead>
          <tr>
            <th>DATA</th>
            <th>QUANTIDADE</th>
            <th>VALOR</th>
          </tr>
        </thead>
        <tbody>
          ${model.list().map((trade) => {
      return `
              <tr>
                <td>${this.format(trade.date)}</td>
                <td>${trade.quantity}</td>
                <td>${trade.value}</td>
              </tr>
            `;
    }).join('')}
        </tbody>
      </table>
    `;
  }

  private format(date: Date): string {
    return new Intl.DateTimeFormat().format(date);
  }
}