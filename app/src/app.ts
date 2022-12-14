import { TradingController } from "./controllers/trading-controller.js";

const controller = new TradingController();

const form = document.querySelector('.form');

if (form) {
  form.addEventListener('submit', (event: Event) => {
    event.preventDefault();
    controller.add();
  })
} else {
  throw Error('Could not initialize the application. Check if the form exists.')
}

const buttonImport = document.querySelector('#button-import');

if (buttonImport) {
  buttonImport.addEventListener('click', () => {
    controller.importData();
  });
} else {
  throw Error('Import button not found');
}
