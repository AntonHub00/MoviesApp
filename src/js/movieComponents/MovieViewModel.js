// This class is also an observer, so this class MUST implement the following
// methods:
// - update(): void

// This class is also a subject, so this class MUST implement the following
// methods ("detach" method not required for this implementation):
// - attach(o: Observer): void
// - notify(): void

import { v4 as uuidv4 } from "uuid";
import MovieModel from "./MovieModel";

export default class MovieViewModel {
  #movieViewModelObservers;

  constructor() {
    this.movieModelSubjects = [];
    this.#movieViewModelObservers = [];
  }

  addMovie(title, imageURL, description, rate) {
    // Generate id somehow
    const id = uuidv4();

    const newMovie = new MovieModel(id, title, imageURL, description, rate);
    newMovie.attach(this);

    // A new item is inserted at the begining.
    this.movieModelSubjects = [newMovie, ...this.movieModelSubjects];

    this.#notify();
  }

  removeMovie(id) {
    this.movieModelSubjects = this.movieModelSubjects.filter(
      (movie) => movie.id !== id
    );

    this.#notify();
  }

  updateMovie(id, title, imageURL, description, rate) {
    const toUpdateMovie = this.movieModelSubjects.find(
      (movie) => movie.id === id
    );

    if (toUpdateMovie) {
      toUpdateMovie.updateMovie(id, title, imageURL, description, rate);
      return;
    }

    throw Error("Movie not found");
  }

  attach(movieViewModelObserver) {
    this.#movieViewModelObservers = [
      ...this.#movieViewModelObservers,
      movieViewModelObserver,
    ];
  }

  #notify() {
    // Tell the View that the ViewModel has changed
    this.#movieViewModelObservers.forEach((movieViewModelObserver) =>
      movieViewModelObserver.update()
    );
  }

  update() {
    // Tell the MovieView that the MovieViewModel has changed
    this.#notify();
  }
}
