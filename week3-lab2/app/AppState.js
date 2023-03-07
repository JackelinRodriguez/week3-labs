import { snack } from "./Models/Snacks.js"
import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', [Value])
  snacks = [
    new snack({ name: 'Starburst', price: 2, imgUrl: 'https://images.unsplash.com/photo-1534119139482-b530a7f9a98b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80' }),

    new snack({ name: 'Gummy Worms', price: 1.50, imgUrl: 'https://images.unsplash.com/photo-1499195333224-3ce974eecb47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1351&q=80' }),

    new snack({ name: 'M&Ms', price: 2, imgUrl: 'https://images.unsplash.com/photo-1581798459219-318e76aecc7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1493&q=80' }),

    new snack({ name: 'Snickers', price: 2, imgUrl: 'https://th.bing.com/th/id/OIP.7AS-oXMorn9rqNphcdpnKgHaGN?pid=ImgDet&rs=1' }),

    new snack({ name: 'Kit Kat', price: 2, imgUrl: 'https://static3.businessinsider.com/image/59ee629af722aa28ae006222-904/kitkat.jpg' }),

    new snack({ name: 'Milky Way', price: 2, imgUrl: 'https://i5.walmartimages.com/asr/c7711f08-4168-4c6c-89e6-2bcfa5e9f1ee_1.219755d7d562e40323f157043ab74317.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff' }),

    new snack({ name: 'Gum', price: 2, imgUrl: 'https://s3.envato.com/files/9c06ee1c-cb3c-480a-8951-6718636edfac/inline_image_preview.jpg' }),

    new snack({ name: 'Hershey', price: 2, imgUrl: 'https://th.bing.com/th/id/OIP.-ZWA4mOMAGlB0QSCNYbw9QHaFj?pid=ImgDet&rs=1' }),
  ]




}

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
