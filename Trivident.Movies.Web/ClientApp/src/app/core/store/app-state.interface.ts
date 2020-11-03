import { createSelector } from '@ngrx/store';
import { IServerOperation, IServerOperationResult, Movie } from '../../shared';

export interface IAppState {
  movies: IServerOperationResult<Movie[]>;
  movieDetails: IServerOperationResult<Movie>;
  addMovie: IServerOperationResult<Movie>;
  editMovie: IServerOperation;
  removeMovie: IServerOperation;
}

export const selectMovies = (s: IAppState) => s.movies;
export const selectMovieDetails = (s: IAppState) => s.movieDetails;
export const selectAddMovie = (s: IAppState) => s.addMovie;
export const selectEditMovie = (s: IAppState) => s.editMovie;
export const selectRemoveMovie = (s: IAppState) => s.removeMovie;

export const selectMoviesLoading = createSelector(selectMovies, s => s.isActive);
export const selectMoviesData = createSelector(selectMovies, s => s.data);
export const selectMoviesSucceeded = createSelector(selectMovies, s => s.succeeded);
export const selectMoviesFailed = createSelector(selectMovies, s => !!s.error);

export const selectMovieDetailsLoading = createSelector(selectMovieDetails, s => s.isActive);
export const selectMovieDetailsData = createSelector(selectMovieDetails, s => s.data);
export const selectMovieDetailsSucceeded = createSelector(selectMovieDetails, s => s.succeeded);
export const selectMovieDetailsFailed = createSelector(selectMovieDetails, s => !!s.error);

export const selectAddMovieLoading = createSelector(selectAddMovie, s => s.isActive);
export const selectAddMovieSucceeded = createSelector(selectAddMovie, s => s.succeeded);
export const selectAddMovieFailed = createSelector(selectAddMovie, s => !!s.error);

export const selectEditMovieLoading = createSelector(selectEditMovie, s => s.isActive);
export const selectEditMovieSucceeded = createSelector(selectEditMovie, s => s.succeeded);
export const selectEditMovieFailed = createSelector(selectEditMovie, s => !!s.error);

export const selectRemoveMovieLoading = createSelector(selectRemoveMovie, s => s.isActive);
export const selectRemoveMovieSucceeded = createSelector(selectRemoveMovie, s => s.succeeded);
export const selectRemoveMovieFailed = createSelector(selectRemoveMovie, s => !!s.error);
