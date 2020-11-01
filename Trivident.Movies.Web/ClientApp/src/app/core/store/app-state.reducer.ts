import { InjectionToken } from '@angular/core';
import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from './app-state.interface';
import { movieDetailsReducer } from './movie-details';
import { moviesReducer } from './movies';

export const AppStateReducer: ActionReducerMap<IAppState> = {
  movies: moviesReducer,
  movieDetails: movieDetailsReducer
}

export const AppStateReducerToken = new InjectionToken<ActionReducerMap<IAppState>>('Registered Reducers');

export const AppStateReducerProvider = {
  provide: AppStateReducerToken,
  useValue: AppStateReducer
};
