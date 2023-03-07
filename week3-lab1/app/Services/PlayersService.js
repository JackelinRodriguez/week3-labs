// we will import appstate
import { appState } from "../AppState.js";
import { PlayersController } from "../Controllers/PlayersController.js";

// i can add the increments here maybe?
class PlayersService {
  clickAdd(name) {
    let player = appState.players.find(p => p.name == name)
    // @ts-ignore
    player.score++
  }

  clickSub(name) {
    let player = appState.players.find(p => p.name == name)
    // @ts-ignore
    player.score--
  }
}

export const playersService = new PlayersService()