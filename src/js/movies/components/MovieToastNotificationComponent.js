import * as bootstrap from "bootstrap"; // Bootstrap JS

export default class toastNofiticationView {
  #toastNofitication;

  constructor() {
    const toast = document.getElementById("liveToast");
    this.#toastNofitication = new bootstrap.Toast(toast);
  }

  show() {
    this.#toastNofitication.show();
  }
}
