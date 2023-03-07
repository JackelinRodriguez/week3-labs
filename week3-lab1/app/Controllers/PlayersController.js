// imports of appstate and players service here
import { appState } from "../AppState.js";
import { playersService, PlayersService } from "../Services/PlayersService.js";

// we can draw our Players here

export class PlayersController {

  constructor() {
    console.log('players controller loaded');
    appState.players.forEach(p => p.CardTemplate)
    this.drawPlayers()
  }

  drawPlayers() {
    let players = appState.players
    let template = ''
    players.forEach(player => template += player.CardTemplate)
    // @ts-ignore
    document.getElementById('players').innerHTML = template
  }

  clickAdd(name) {
    playersService.clickAdd(name)
    console.log('adding');
    this.drawPlayers()
  }

  clickSub(name) {
    playersService.clickSub(name)
    console.log('subtracting');
    this.drawPlayers()
  }



}