export default class MovieBadgeComponent {
  #badgeClone;

  constructor() {
    this.#badgeClone = document
      .getElementById("lastBadgeTemplate")
      .content.cloneNode(true);
  }

  build() {
    return this.#badgeClone;
  }
}
