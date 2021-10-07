import * as bootstrap from "bootstrap"; // Bootstrap JS

export default class toastNofiticationView {
  constructor() {
    this.toast = document.getElementById("liveToast");
    this.toastNofitication = new bootstrap.Toast(this.toast);
  }

  show() {
    this.toastNofitication.show();
  }
}
