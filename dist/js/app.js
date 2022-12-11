import { TradingController } from "./controllers/trading-controller.js";
const controller = new TradingController();
const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        controller.add();
    });
}
else {
    throw Error('Could not initialize the application. Check if the form exists.');
}
