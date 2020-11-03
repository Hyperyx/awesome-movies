import { InjectionToken } from '@angular/core';
import { ActionReducerMap } from '@ngrx/store';

import { createServerOperationReducer, createServerOperationResultReducer } from '../../shared';
import { AddMovieActions } from './add-movie';
import { IAppState } from './app-state.interface';
import { EditMovieActions } from './edit-movie';
import { MovieDetailsActions } from './movie-details';
import { MoviesActions } from './movies';
import { RemoveMovieActions } from './remove-movie';

export const AppStateReducer: ActionReducerMap<IAppState> = {
  movies: createServerOperationResultReducer(
    MoviesActions.LOAD,
    MoviesActions.LOAD_COMPLETE,
    MoviesActions.LOAD_ERROR,
    MoviesActions.LOAD_RESET
  ),
  movieDetails: createServerOperationResultReducer(
    MovieDetailsActions.LOAD,
    MovieDetailsActions.LOAD_COMPLETE,
    MovieDetailsActions.LOAD_ERROR,
    MovieDetailsActions.LOAD_RESET
  ),
  addMovie: createServerOperationResultReducer(
    AddMovieActions.EXECUTE,
    AddMovieActions.EXECUTE_COMPLETE,
    AddMovieActions.EXECUTE_ERROR,
    AddMovieActions.EXECUTE_RESET
  ),
  editMovie: createServerOperationReducer(
    EditMovieActions.EXECUTE,
    EditMovieActions.EXECUTE_COMPLETE,
    EditMovieActions.EXECUTE_ERROR,
    EditMovieActions.EXECUTE_RESET
  ),
  removeMovie: createServerOperationReducer(
    RemoveMovieActions.EXECUTE,
    RemoveMovieActions.EXECUTE_COMPLETE,
    RemoveMovieActions.EXECUTE_ERROR,
    RemoveMovieActions.EXECUTE_RESET
  )
}

export const AppStateReducerToken = new InjectionToken<ActionReducerMap<IAppState>>('Registered Reducers');

export const AppStateReducerProvider = {
  provide: AppStateReducerToken,
  useValue: AppStateReducer
};
