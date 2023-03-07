// this is where we import our characters from characters control it looked like on reference
import { PlayersController } from "./Controllers/PlayersController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();
  // characters controller
  playersController = new PlayersController()
}

window["app"] = new App();
