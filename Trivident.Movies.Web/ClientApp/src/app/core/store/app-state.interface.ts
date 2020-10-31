import { Movie } from '../../shared';

export interface IAppState {
  movies: Movie[];
}

export const selectMovies = (s: IAppState) => s.movies;
