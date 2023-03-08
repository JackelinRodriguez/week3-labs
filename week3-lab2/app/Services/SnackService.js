import { appState } from "../AppState.js";

class SnackService {

  // buy function will be here 
  addMoney() {
    appState.money += 0.25
    console.log(appState.money);
  }


}



export const snackService = new SnackService()