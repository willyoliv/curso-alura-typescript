import { TradingController } from "./controllers/trading-controller.js";

const controller = new TradingController();

const form = document.querySelector('.form');
form.addEventListener('submit', (event: Event) => {
  event.preventDefault();
  controller.add();
})

