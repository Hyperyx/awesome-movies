import { HttpErrorResponse } from '@angular/common/http';
import { Action } from '@ngrx/store';

import { IServerOperationResultAction, IServerOperationErrorAction, Movie } from '../../../shared';

export namespace MoviesActions {
  export const LOAD = '[Movies] LOAD';
  export const LOAD_COMPLETE = '[Movies] LOAD_COMPLETE';
  export const LOAD_ERROR = '[Movies] LOAD_ERROR';
  export const LOAD_RESET = '[Movies] LOAD_RESET';

  export class Load implements Action {
    public readonly type = LOAD;
  }

  export class LoadComplete implements Action, IServerOperationResultAction<Movie[]> {
    public readonly type = LOAD_COMPLETE;
    public readonly payload: { data?: Movie[] };

    constructor(movies?: Movie[]) {
      this.payload = {
        data: movies
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
