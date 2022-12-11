import { View } from "./view.js";
export class TradesView extends View {
    template(model) {
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
    format(date) {
        return new Intl.DateTimeFormat().format(date);
    }
}
