import { Movie } from '../../shared';

export interface IAppState {
  movies: Movie[];
  movieDetails: Movie;
}

export const selectMovies = (s: IAppState) => s.movies;
export const selectMovieDetails = (s: IAppState) => s.movieDetails;
