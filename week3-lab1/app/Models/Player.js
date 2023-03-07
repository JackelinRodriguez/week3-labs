//  export the class character
// single? not plural
export class Player {
  constructor(name, score) {
    this.name = name;
    this.score = 0;
  }

  get CardTemplate() {
    return `
    <div class="col-6 bg-dark text-light">
    <div class="d-flex flex-row text-light justify-content-evenly">
    <img
      src="https://images.unsplash.com/photo-1536548665027-b96d34a005ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
      alt="isaac-img" class="h-img rounded-circle">
    <h4>${this.name}</h4>
    <i class="mdi mdi-minus-circle-outline m-2" onclick="app.playersController.clickSub"></i>
    <p>${this.score}</p>
    <i class="mdi mdi-plus-circle-outline m-2" onclick="app.playersController.clickAdd"></i>
  </div>
    `
  }
}


// constructor, greetings, template innerHTMl here