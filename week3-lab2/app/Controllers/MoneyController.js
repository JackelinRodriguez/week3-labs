import { appState } from "../AppState.js";
import { moneyService } from "../Services/MoneyService.js";
import { setText } from "../Utils/Writer.js";



function _drawMoney() {
  console.log('drawing money');
  let template = ''



  setText('money', template)


}

export class MoneyController {
  constructor() {
    console.log('hello from money controller');
    appState.on('money', _drawMoney)
  }
  addMoney() {
    console.log('adding money');
    moneyService.addMoney()
  }
}