import "bootstrap"; // Bootstrap JS
import "./styles/index.scss"; // Bootstrap CSS
import MovieViewModel from "./js/movies/MovieViewModel";
import CardsView from "./js/movies/CardsView";
import MovieModalComponent from "./js/movies/components/MovieModalComponent";
import AddMovieButtonView from "./js/movies/AddMovieButtonView";

const movieModalComponent = new MovieModalComponent();

const movieViewModel = new MovieViewModel();

const cardsView = new CardsView(movieViewModel, movieModalComponent);
const addMovieButtonView = new AddMovieButtonView(
  movieViewModel,
  movieModalComponent
);

movieViewModel.attach(cardsView);
movieViewModel.attach(addMovieButtonView);
