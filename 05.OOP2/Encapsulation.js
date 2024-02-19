class Customer {
  #create() {
    console.log("i am creating myself");
  }

  createSelf() {
    this.#create();
  }
}

const ezeh = new Customer();

ezeh.createSelf();
