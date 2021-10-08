import MovieCardComponent from "./components/MovieCardComponent";

export default class CardsView {
  #movieViewModelSubject;
  #cardContainer;

  constructor(movieViewModelSubject) {
    this.#movieViewModelSubject = movieViewModelSubject;

    this.#cardContainer = document.getElementById("cardsContainer");
  }

  #renderCards() {
    // Reset content to render the cards every time the view-model/model state is modified
    this.#cardContainer.innerHTML = "";

    const cardsFragment = new DocumentFragment();

    this.#movieViewModelSubject.movieModelSubjects.forEach((movie, index) => {
      // New items are inserted at the begining
      const isLastInserted = index == 0;

      const { id, title, imageURL, description, rate } = movie.getValues();

      cardsFragment.append(
        new MovieCardComponent(
          id,
          title,
          imageURL,
          description,
          rate,
          isLastInserted,
          () => console.log("Should edit card"),
          () => console.log("Should remove card")
        ).build()
      );
    });

    this.#cardContainer.appendChild(cardsFragment);
  }

  #deleteCard() {}

  update() {
    this.#renderCards();
  }
}
