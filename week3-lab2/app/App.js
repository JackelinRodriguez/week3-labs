// we will import the money from controller when i get there
import { MoneyController } from "./Controllers/MoneyController.js";
import { SnacksController } from "./Controllers/SnackController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // we register our controls here 
  // valuesController = new ValuesController();

  snacksController = new SnacksController();
  // the money controller will go here too
  moneyController = new MoneyController();
}

window["app"] = new App();
