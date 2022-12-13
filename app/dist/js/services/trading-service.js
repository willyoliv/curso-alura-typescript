import { Trading } from "../models/trading.js";
export class TradingService {
    getDaysTrades() {
        return fetch('http://localhost:8080/dados')
            .then(res => res.json())
            .then((data) => {
            return data.map(todayData => {
                return new Trading(new Date(), todayData.vezes, todayData.montante);
            });
        });
    }
}
//# sourceMappingURL=trading-service.js.map