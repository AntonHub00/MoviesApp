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
  #localStorageId;

  constructor() {
    this.movieModelSubjects = [];
    this.#movieViewModelObservers = [];
    this.#localStorageId = "moviesDataList";

    this.#restoreState();
  }

  addMovie(title, imageURL, description, rate) {
    // Generate id somehow
    const id = uuidv4();

    const newMovie = new MovieModel(id, title, imageURL, description, rate);
    newMovie.attach(this); // Notify me if this model change

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
      toUpdateMovie.updateMovie(title, imageURL, description, rate);
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
    // Tell the Views that the ViewModel has changed
    this.#movieViewModelObservers.forEach((movieViewModelObserver) =>
      movieViewModelObserver.update()
    );

    this.#saveState();
  }

  #saveState() {
    const moviesDataList = this.movieModelSubjects.map((movie) =>
      movie.getValues()
    );

    const moviesDataListString = JSON.stringify(moviesDataList);

    localStorage.setItem(this.#localStorageId, moviesDataListString);
  }

  #restoreState() {
    const moviesDataListString = localStorage.getItem(this.#localStorageId);

    if (!moviesDataListString) return;

    const moviesDataList = JSON.parse(moviesDataListString);
    moviesDataList.reverse();

    moviesDataList.forEach(({ title, imageURL, description, rate }) =>
      this.addMovie(title, imageURL, description, rate)
    );
  }

  update() {
    // Tell the Views that the MovieViewModel has changed
    this.#notify();
  }
}
