import "bootstrap"; // Bootstrap JS
import "./styles/index.scss"; // Bootstrap CSS
import MovieViewModel from "./js/movieComponents/MovieViewModel";
import AddMovieView from "./js/movieComponents/AddMovieView";
import MovieCardContainerView from "./js/movieComponents/MovieCardContainerView";

const movieViewModel = new MovieViewModel();

const addMovieView = new AddMovieView(movieViewModel);
const movieCardContainerView = new MovieCardContainerView(movieViewModel);

movieViewModel.attach(addMovieView);
movieViewModel.attach(movieCardContainerView);
