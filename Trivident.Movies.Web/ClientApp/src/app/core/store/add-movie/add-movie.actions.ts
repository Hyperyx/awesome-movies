import { HttpErrorResponse } from '@angular/common/http';
import { Action } from '@ngrx/store';

import { IServerOperationErrorAction, IServerOperationResultAction, Movie } from '../../../shared';

export namespace AddMovieActions {
  export const EXECUTE = '[AddMovieActions] EXECUTE';
  export const EXECUTE_COMPLETE = '[AddMovieActions] EXECUTE_COMPLETE';
  export const EXECUTE_ERROR = '[AddMovieActions] EXECUTE_ERROR';
  export const EXECUTE_RESET = '[AddMovieActions] EXECUTE_RESET';

  export class Execute implements Action {
    public readonly type = EXECUTE;
    public readonly payload: {
      movie: Movie;
    };
    constructor(movie: Movie) {
      this.payload = {
        movie
      };
    }
  }

  export class ExecuteComplete implements Action, IServerOperationResultAction<Movie> {
    public readonly type = EXECUTE_COMPLETE;
    public readonly payload: {
      data?: Movie;
    };
    constructor(data: Movie) {
      this.payload = {
        data
      };
    }
  }

  export class ExecuteError implements IServerOperationErrorAction {
    public readonly type = EXECUTE_ERROR;
    public readonly payload: {
      httpError?: HttpErrorResponse;
    };

    constructor(httpError?: HttpErrorResponse) {
      this.payload = {
        httpError
      };
    }
  }

  export class ExecuteReset implements Action {
    public readonly type = EXECUTE_RESET;
  }

  export type Actions = Execute | ExecuteComplete | ExecuteError | ExecuteReset;
}
