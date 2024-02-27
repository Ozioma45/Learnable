class Subjest {
  constructor() {
    this.observers = new Set();
  }

  add(observer) {
    this.observers.add(observer);
  }

  remove(observer) {
    this.observers.delete(observer);
  }

  notify(context) {
    for (let observer of this.observers) {
      observer.update(context);
    }
  }
}

class Observer {
  constructor() {}
  update() {}
}
