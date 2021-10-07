import MovieCardView from "./MovieCardView";

export default class MovieCardContainerView {
  #movieViewModelSubject;
  #cardContainer;

  constructor(movieViewModelSubject) {
    this.#movieViewModelSubject = movieViewModelSubject;

    this.#cardContainer = document.getElementById("cardsContainer");
  }

  #renderCards() {
    const cardDivClasses = ["col-12", "col-md-6", "col-lg-4", "col-xxl-3"];

    // Reset content to render the cards every time the view-model/model state is modified
    this.#cardContainer.innerHTML = "";

    this.#movieViewModelSubject.movieModelSubjects.forEach((movie, index) => {
      // New items are inserted at the begining
      const isLastInserted = index == 0;

      const { id, title, imageURL, description, rate } = movie.getValues();

      const cardDiv = document.createElement("div");

      cardDiv.classList.add(...cardDivClasses);

      cardDiv.innerHTML = new MovieCardView(
        id,
        title,
        imageURL,
        description,
        rate,
        isLastInserted
      ).generate();

      this.#cardContainer.appendChild(cardDiv);
    });
  }

  update() {
    this.#renderCards();
  }
}
