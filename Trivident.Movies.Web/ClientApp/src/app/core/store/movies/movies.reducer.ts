import { Movie } from '../../../shared';
import { MoviesActions } from './movies.actions';

export const moviesReducer = (state: Movie[] | undefined, action: MoviesActions.Actions): Movie[] | undefined => {
  switch (action.type) {
    case MoviesActions.LOAD_COMPLETE:
      return action.payload.data ? action.payload.data : undefined;
    default:
      return state;
  }
};
