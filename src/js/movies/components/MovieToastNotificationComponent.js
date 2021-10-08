import * as bootstrap from "bootstrap"; // Bootstrap JS

export default class MovieToastNofiticationComponent {
  #toastNofitication;

  constructor() {
    const toast = document.getElementById("liveToast");
    this.#toastNofitication = new bootstrap.Toast(toast);
  }

  show() {
    this.#toastNofitication.show();
  }
}
