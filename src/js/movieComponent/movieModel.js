// This class also a subject, so this class MUST implement the following
// methods ("detach" method not required for this implementation):
// - attach(o: Observer): void
// - notify(): void

export class MovieModel {
  #id;
  #title;
  #imageURL;
  #description;
  #rate;
  #movieModelObservers;

  constructor(id, title, imageURL, description, rate) {
    this.#id = id;
    this.#title = title;
    this.#imageURL = imageURL;
    this.#description = description;
    this.#rate = rate;

    this.#movieModelObservers = [];
  }

  updateMovie(title, imageURL, description, rate) {
    this.#title = title;
    this.#imageURL = imageURL;
    this.#description = description;
    this.#rate = rate;

    this.notify();
  }

  attach(observerObj) {
    this.#movieModelObservers = [...this.#movieModelObservers, observerObj];
  }

  notify() {
    // Tell the MovieViewModel that the MovieModel has changed
    this.#movieModelObservers.forEach((movieModelObserver) =>
      movieModelObserver.update()
    );
  }
}
