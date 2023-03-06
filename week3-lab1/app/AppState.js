// an import from character.js
import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

// do not worry about this part per Mick
class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  // values = loadState('values', [Value])




  // an array of characters here well it says new characters on reference
  players = [
    new Player('Isaac Guerrero'),
    new Player('Oswaldo Rodriguez'),
    new Player('Claudia Davila'),
    new Player('Rayo Rodriguez')
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