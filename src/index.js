import "bootstrap"; // Bootstrap JS
import "./styles/index.scss"; // Bootstrap CSS
import MovieViewModel from "./js/movieComponents/MovieViewModel";
import AddMovieView from "./js/movieComponents/AddMovieView";

const movieViewModel = new MovieViewModel();

const addMovieView = new AddMovieView(movieViewModel);

movieViewModel.attach(addMovieView);
