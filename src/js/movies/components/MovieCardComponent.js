import MovieBadgeComponent from "./MovieBadgeComponent";
import MovieRateComponent from "./MovieRateComponent";

export default class MovieCardComponent {
  #id;
  #title;
  #imageURL;
  #description;
  #rate;
  #isLastInserted;
  #editCallback;
  #removeCallback;
  #cardTemplateClone;

  constructor(
    id,
    title,
    imageURL,
    description,
    rate,
    isLastInserted,
    editCallback,
    removeCallback
  ) {
    this.#id = id;
    this.#title = title;
    this.#imageURL = imageURL;
    this.#description = description;
    this.#rate = rate;
    this.#isLastInserted = isLastInserted;
    this.#editCallback = editCallback;
    this.#removeCallback = removeCallback;

    this.#cardTemplateClone = document
      .getElementById("movieCardTemplate")
      .content.cloneNode(true);
  }

  #queryCardInnerElement(selector) {
    const element = this.#cardTemplateClone.querySelector(selector);
    return element;
  }

  #setTitle() {
    const title = this.#queryCardInnerElement(".card-title");
    title.textContent = this.#title;
  }

  #setImageURL() {
    const image = this.#queryCardInnerElement("img");
    image.src = this.#imageURL;
  }

  #setDescription() {
    const description = this.#queryCardInnerElement(".card-text");
    description.textContent = this.#description;
  }

  #setEditButton() {
    const editButton =
      this.#queryCardInnerElement(".float-end").firstElementChild;

    editButton.onclick = () => this.#editCallback(this.#id);
  }

  #setRemoveButton() {
    const editButton =
      this.#queryCardInnerElement(".float-end").lastElementChild;

    editButton.onclick = () => this.#removeCallback(this.#id);
  }

  #setLastBadge() {
    if (!this.#isLastInserted) return;

    const card = this.#queryCardInnerElement(".card");

    card.insertBefore(
      new MovieBadgeComponent().build(),
      card.firstElementChild
    );
  }

  #setRateIcons() {
    const cardBodyChildren = this.#queryCardInnerElement(".card-body").children;
    const rateDiv = cardBodyChildren[2];
    const rateFragment = new MovieRateComponent(this.#rate).build();
    rateDiv.appendChild(rateFragment);
  }

  build() {
    this.#setTitle();
    this.#setImageURL();
    this.#setDescription();
    this.#setEditButton();
    this.#setRemoveButton();
    this.#setLastBadge();
    this.#setRateIcons();

    return this.#cardTemplateClone;
  }
}
