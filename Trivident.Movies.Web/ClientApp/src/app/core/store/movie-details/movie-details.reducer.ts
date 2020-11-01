import { Movie } from '../../../shared/models';
import { MovieDetailsActions } from './movie-details.actions';

export const movieDetailsReducer = (state: Movie | undefined, action: MovieDetailsActions.Actions): Movie | undefined => {
  switch (action.type) {
    case MovieDetailsActions.LOAD_COMPLETE:
      return action.payload.data ? action.payload.data : undefined;
    default:
      return state;
  }
};
