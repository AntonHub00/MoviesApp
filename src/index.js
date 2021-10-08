import "bootstrap"; // Bootstrap JS
import "./styles/index.scss"; // Bootstrap CSS
import MovieViewModel from "./js/movies/MovieViewModel";
import AddMovieView from "./js/movies/AddMovieView";
import CardsView from "./js/movies/CardsView";

const movieViewModel = new MovieViewModel();

const addMovieView = new AddMovieView(movieViewModel);
const movieCardContainerView = new CardsView(movieViewModel);

movieViewModel.attach(addMovieView);
movieViewModel.attach(movieCardContainerView);
