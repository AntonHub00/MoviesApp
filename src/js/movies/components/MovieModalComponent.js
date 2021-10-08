import * as bootstrap from "bootstrap"; // Bootstrap JS

export default class MovieModalComponent {
  #addButton;
  #titleInput;
  #imageURLInput;
  #descriptionInput;
  #rateInput;
  #errorAlert;
  #rawModal;
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

    this.#rawModal = document.getElementById("newMovie");
    this.#rawModal.addEventListener("hidden.bs.modal", () =>
      this.#clearInputs()
    );

    this.#modal = new bootstrap.Modal(this.#rawModal);

    this.#saveStrategy = null;
  }

  #setSaveStrategy(saveStrategy) {
    this.#saveStrategy = saveStrategy;
  }

  #setTitle(title) {
    const modalTitle = this.#rawModal.querySelector(".modal-title");
    modalTitle.textContent = title;
  }

  #setSaveButtonText(text) {
    this.#addButton.textContent = text;
  }

  setConfig(saveStrategy, title, buttonText) {
    this.#setSaveStrategy(saveStrategy);
    this.#setTitle(title);
    this.#setSaveButtonText(buttonText);
  }

  setInputs(title, imageURL, description, rate) {
    this.#titleInput.value = title;
    this.#imageURLInput.value = imageURL;
    this.#descriptionInput.value = description;
    this.#rateInput.value = rate;
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
