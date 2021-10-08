export default class MovieRateIcon {
  #rateIconClone;
  #iconType;

  constructor(iconType) {
    this.#iconType = iconType;

    this.#rateIconClone = document
      .getElementById("rateIconTemplate")
      .content.cloneNode(true);
  }

  build() {
    this.#rateIconClone.querySelector("span").textContent = this.#iconType;
    return this.#rateIconClone;
  }
}
