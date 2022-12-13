var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { escape } from "../decorators/escape.js";
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
__decorate([
    escape
], TradesView.prototype, "template", null);
//# sourceMappingURL=trades-view.js.map