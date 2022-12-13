import { TodaysTrading } from "../interfaces/todays-trading.js";
import { Trading } from "../models/trading.js";

export class TradingService {
  public getDaysTrades(): Promise<Trading[]> {
    return fetch('http://localhost:8080/dados')
      .then(res => res.json())
      .then((data: TodaysTrading[]) => {
        return data.map(todayData => {
          return new Trading(new Date(), todayData.vezes, todayData.montante);
        });
      });
  }
}