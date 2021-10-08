import MovieCardComponent from "./components/MovieCardComponent";

export default class CardsView {
  #movieViewModelSubject;
  #cardContainer;

  constructor(movieViewModelSubject) {
    this.#movieViewModelSubject = movieViewModelSubject;

    this.#cardContainer = document.getElementById("cardsContainer");

    // ### Bindings! ###
    // These are required so the functions passed to other components/objects
    // are executed with the context of this class (as if the other components
    // were an object of this class).
    this.removeCard = this.removeCard.bind(this);
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
          this.removeCard
        ).build()
      );
    });

    this.#cardContainer.appendChild(cardsFragment);
  }

  removeCard(id) {
    this.#movieViewModelSubject.removeMovie(id);
  }

  update() {
    this.#renderCards();
    console.log("MovieViewModel update received in CardsView");
  }
}
