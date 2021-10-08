// This class also a observer, so this class MUST implement the following
// methods:
// - update(): void

import * as bootstrap from "bootstrap"; // Bootstrap JS

export default class MovieModalComponent {
  #addButton;
  #titleInput;
  #imageURLInput;
  #descriptionInput;
  #rateInput;
  #errorAlert;
  #modal;
  #saveStrategy;

  constructor() {
    this.#titleInput = document.getElementById("movieTitle");
    this.#imageURLInput = document.getElementById("movieImageURL");
    this.#descriptionInput = document.getElementById("movieDescription");
    this.#rateInput = document.getElementById("movieRate");

    this.#errorAlert = document.getElementById("movieAlertInputError");

    this.#addButton = document.getElementById("addNewMovieButton");
    this.#addButton.onclick = () => this.#addMovie();

    const rawModal = document.getElementById("newMovie");
    rawModal.addEventListener("hidden.bs.modal", () => this.#clearInputs());

    this.#modal = new bootstrap.Modal(rawModal);

    this.#saveStrategy = null;
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

  setSaveStrategy(saveStrategy) {
    this.#saveStrategy = saveStrategy;
  }

  #addMovie() {
    if (!this.#validInputs()) return;

    if (!this.#saveStrategy) throw Error("Save strategy function not set");

    this.#saveStrategy(
      this.#titleInput.value,
      this.#imageURLInput.value,
      this.#descriptionInput.value,
      this.#rateInput.value
    );

    this.closeModal();
  }

  openModal() {
    this.#modal.show();
  }

  closeModal() {
    this.#modal.hide();
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
}
