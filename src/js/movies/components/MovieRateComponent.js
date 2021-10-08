import MovieRateIcon from "./MovieRateIcon";

export default class MovieRateComponent {
  #rate;
  #maxRate;

  constructor(rate) {
    this.#rate = Number(rate);
    this.#maxRate = 5;
  }

  build() {
    const filledStarsArray = Array.from({ length: this.#rate }, () =>
      new MovieRateIcon("star").build()
    );

    const outlinedStarsArray = Array.from(
      { length: this.#maxRate - this.#rate },
      () => new MovieRateIcon("star_outline").build()
    );

    const orderedRateIcons = [...filledStarsArray, ...outlinedStarsArray];

    const rateFragment = new DocumentFragment();

    orderedRateIcons.forEach((rateIcon) => rateFragment.append(rateIcon));

    return rateFragment;
  }
}
