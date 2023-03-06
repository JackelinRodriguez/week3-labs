// this is where we import our characters from characters control it looked like on reference
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  valuesController = new ValuesController();
  // characters controller
}

window["app"] = new App();
