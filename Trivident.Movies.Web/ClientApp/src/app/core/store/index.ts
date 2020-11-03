import { AddMovieEffects } from './add-movie';
import { EditMovieEffects } from './edit-movie';
import { RemoveMovieEffects } from './remove-movie';
import { MovieDetailsEffects } from './movie-details';
import { MoviesEffects } from './movies';

export * from './app-state.interface';
export * from './app-state.reducer';

export * from './add-movie'
export * from './edit-movie'
export * from './remove-movie'
export * from './movie-details'
export * from './movies'

export const effects = [AddMovieEffects, EditMovieEffects, RemoveMovieEffects, MovieDetailsEffects, MoviesEffects];
