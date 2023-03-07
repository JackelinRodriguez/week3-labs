// an import from character.js
import { Player } from "./Models/Player.js";
import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

// do not worry about this part per Mick
class AppState extends EventEmitter {
  // /** @type {import('./Models/Value').Value[]} */
  // values = loadState('values', [Value])
  // an array of characters here well it says new characters on reference
  // in my player.js the constructor had the name, score.... so it accounts for my zero
  players = [
    new Player('Isaac', 0),
    new Player('Oswaldo', 0),
    new Player('Claudia', 0),
    new Player('Rayo', 0)
  ]
}



// do not worry about this section, it just goes i guess
export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})

// console.log the appstate.players
console.log(appState.players);