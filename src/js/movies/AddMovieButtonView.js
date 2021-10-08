// This class also a observer, so this class MUST implement the following
// methods:
// - update(): void

export default class AddMovieButtonView {
  #movieViewModelSubject;
  #movieModalComponent;

  constructor(movieViewModelSubject, movieModalComponent) {
    this.#movieViewModelSubject = movieViewModelSubject;
    this.#movieModalComponent = movieModalComponent;

    const button = document.getElementById("newMovieButton");
    button.onclick = () => this.#setModal();

    // ### Bindings! ###
    // These are required so the functions passed to other components/objects
    // are executed with the context of this class (as if the other components
    // were an object of this class).
    this.addMovie = this.addMovie.bind(this);
  }

  #setModal() {
    this.#movieModalComponent.setSaveStrategy(this.addMovie);

    this.#movieModalComponent.openModal();
  }

  addMovie(title, imageURL, description, rate) {
    this.#movieViewModelSubject.addMovie(title, imageURL, description, rate);
  }

  update() {
    console.log("MovieViewModel update received in AddMovieButtonView");
  }
}
