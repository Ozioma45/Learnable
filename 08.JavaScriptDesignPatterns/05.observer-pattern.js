/* Observer Pattern: This pattern is like subscribing to a magazine. You have subscribers (observers) 
who are interested in updates, and when there's a change (update), they get notified automatically. */

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
