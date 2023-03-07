import { appState } from "../AppState.js";
import { saveState } from "../Utils/Store.js";

class SnackService {

  // buy function will be here 
  buySnack(snackName) {
    let buy = appState.snacks.find(b => b.name == snackName)
    console.log(buy);
    // aqui es donde va ir mi function de dinero este mas grande que el precio
    // @ts-ignore
    //   if ()
  }

}


















export const snackService = new SnackService()