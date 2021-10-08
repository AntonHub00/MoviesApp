// This class also a observer, so this class MUST implement the following
// methods:
// - update(): void

import * as bootstrap from "bootstrap"; // Bootstrap JS
import MovieToastNotificationComponent from "./components/MovieToastNotificationComponent";

export default class AddMovieView {
  #movieViewModelSubject;
  #addButton;
  #titleInput;
  #imageURLInput;
  #descriptionInput;
  #rateInput;
  #errorAlert;
  #modal;
  #toast;

  constructor(movieViewModelSubject) {
    this.#movieViewModelSubject = movieViewModelSubject;

    this.#titleInput = document.getElementById("movieTitle");
    this.#imageURLInput = document.getElementById("movieImageURL");
    this.#descriptionInput = document.getElementById("movieDescription");
    this.#rateInput = document.getElementById("movieRate");
    this.#errorAlert = document.getElementById("movieAlertInputError");

    this.#addButton = document.getElementById("addNewMovieButton");
    this.#addButton.onclick = () => this.#addMovie();

    this.#modal = new bootstrap.Modal(document.getElementById("newMovie"));

    this.#toast = new MovieToastNotificationComponent();
  }

  #validInputs() {
    if (
      [
        this.#titleInput.value,
        this.#imageURLInput.value,
        this.#descriptionInput.value,
        this.#rateInput.value,
      ].includes("")
    ) {
      this.#showInputError();
      return false;
    }

    this.#hideInputError();
    return true;
  }

  #addMovie() {
    if (!this.#validInputs()) return;

    this.#movieViewModelSubject.addMovie(
      this.#titleInput.value,
      this.#imageURLInput.value,
      this.#descriptionInput.value,
      this.#rateInput.value
    );

    this.#modal.toggle();
    this.#clearInputs();

    this.#showToastNotification();
  }

  #clearInputs() {
    this.#titleInput.value = "";
    this.#imageURLInput.value = "";
    this.#descriptionInput.value = "";
    this.#rateInput.value = "";
  }

  #showInputError() {
    this.#errorAlert.innerText = "Inputs cannot be empty!";
    this.#errorAlert.hidden = false;
  }

  #hideInputError() {
    this.#errorAlert.hidden = true;
  }

  #showToastNotification() {
    this.#toast.show();
  }

  update() {
    console.log("MovieViewModel update received in AddMovieView");
  }
}
