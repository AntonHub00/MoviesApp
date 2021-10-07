export default class MovieCardView {
  #id;
  #title;
  #imageURL;
  #description;
  #rate;
  #maxRate;
  #isLastInserted;

  constructor(id, title, imageURL, description, rate, isLastInserted) {
    this.#id = id;
    this.#title = title;
    this.#imageURL = imageURL;
    this.#description = description;
    this.#rate = Number(rate);
    this.#maxRate = 5;
    this.#isLastInserted = isLastInserted;
  }

  #rateTag(icon) {
    return `<span class="material-icons-outlined align-middle">${icon}</span>`;
  }

  #buildRate() {
    const filledStar = this.#rateTag`star`;
    const outlinedStar = this.#rateTag`star_outline`;

    console.log(this.#rate);
    console.log(typeof this.#rate);

    const toDisplayRate = [
      ...new Array(this.#rate).fill(filledStar),
      ...new Array(this.#maxRate - this.#rate).fill(outlinedStar),
    ];

    const finalRateToDisplay = toDisplayRate.join("\n");

    return finalRateToDisplay;
  }

  #addBadge() {
    return `
                  <!-- "Latest" badge -->
                  <span
                    class="
                      position-absolute
                      top-0
                      start-100
                      translate-middle
                      badge
                      rounded-pill
                      bg-danger
                    "
                  >
                    Latest
                  </span>
		`;
  }

  generate() {
    return `
                <div id="${this.#id}" class="card" style="min-width: 300px">
									${this.#isLastInserted ? this.#addBadge() : ""}

                  <img
                    id="test"
                    src="${this.#imageURL}"
                    class="card-img-top"
                    alt="Movie image"
                  />
                  <div class="card-body">
                    <h5 class="card-title text-center">${this.#title}</h5>

                    <p class="card-text">
											${this.#description}
                    </p>

                    <div class="mb-3">
                      <span class="align-middle">Rate: </span>
											${this.#buildRate()}
                    </div>

                    <div class="float-end">
                      <a href="#" class="btn btn-dark">
                        <span class="material-icons-outlined align-middle">
                          edit
                        </span></a
                      >
                      <a href="#" class="btn btn-outline-dark">
                        <span class="material-icons-outlined align-middle">
                          delete
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
		`;
  }
}
