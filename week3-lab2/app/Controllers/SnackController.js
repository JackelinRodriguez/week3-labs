import { appState } from "../AppState.js";
// import { snackService } from "../Services/SnackService.js";
import { setHTML } from "../Utils/Writer.js";


function _drawSnacks() {
  console.log('drawing snacks');
  let snacks = appState.snacks
  let template = ''
  snacks.forEach(s => template += s.SnackTemplate)
  setHTML('snacks', template)
}



export class SnacksController {
  constructor() {
    console.log('Hi, from snackController');

    _drawSnacks()



  }
}



