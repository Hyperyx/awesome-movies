import { MovieDetailsEffects } from './movie-details';
import { MoviesEffects } from './movies';

export * from './app-state.interface';
export * from './app-state.reducer';

export * from './movies'
export * from './movie-details'

export const effects = [MoviesEffects, MovieDetailsEffects];
