import { HttpErrorResponse } from '@angular/common/http';
import { Action } from '@ngrx/store';

import { IServerOperationResultAction, IServerOperationErrorAction, Movie } from '../../../shared';

export namespace MovieDetailsActions {
  export const LOAD = '[MovieDetails] LOAD';
  export const LOAD_COMPLETE = '[MovieDetails] LOAD_COMPLETE';
  export const LOAD_ERROR = '[MovieDetails] LOAD_ERROR';
  export const LOAD_RESET = '[MovieDetails] LOAD_RESET'

  export class Load implements Action {
    public readonly type = LOAD;
    public readonly payload: {
      id: string;
    }
    constructor(id: string) {
      this.payload = {
        id
      };
    }
  }

  export class LoadComplete implements Action, IServerOperationResultAction<Movie> {
    public readonly type = LOAD_COMPLETE;
    public readonly payload: { data?: Movie };

    constructor(movie?: Movie) {
      this.payload = {
        data: movie
      };
    }
  }

  export class LoadError implements IServerOperationErrorAction {
    public readonly type = LOAD_ERROR;
    public readonly payload: {
      httpError?: HttpErrorResponse;
    };

    constructor(httpError?: HttpErrorResponse) {
      this.payload = {
        httpError
      };
    }
  }

  export class LoadReset implements Action {
    public readonly type = LOAD_RESET;
  }

  export type Actions = Load | LoadComplete | LoadError | LoadReset;
}
