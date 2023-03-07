import { appState } from "../AppState.js";

export class snack {
  constructor(data) {
    this.name = data.name
    this.price = data.price
    this.imgUrl = data.imgUrl
  }

  get SnackTemplate() {
    return `
    <div class="col-4 card">
    <img
      src="${this.imgUrl}"
      alt="starburst" class="card-h">
    <div>
      <h5>${this.name}</h5>
      <h5>$${this.price}</h5>
    </div>
    <button class="btn btn-info" onclick="app.snackController">Buy</button>
  </div>
    `
  }






}


// NOTE in the on click, i might need to add something else to be able to click on it 