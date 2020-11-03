import { HttpErrorResponse } from '@angular/common/http';
import { Action } from '@ngrx/store';

import { IServerOperationErrorAction } from '../../../shared';

export namespace RemoveMovieActions {
  export const EXECUTE = '[RemoveMovieActions] EXECUTE';
  export const EXECUTE_COMPLETE = '[RemoveMovieActions] EXECUTE_COMPLETE';
  export const EXECUTE_ERROR = '[RemoveMovieActions] EXECUTE_ERROR';
  export const EXECUTE_RESET = '[RemoveMovieActions] EXECUTE_RESET';

  export class Execute implements Action {
    public readonly type = EXECUTE;
    public readonly payload: {
      id: string;
    };
    constructor(id: string) {
      this.payload = {
        id
      };
    }
  }

  export class ExecuteComplete implements Action {
    public readonly type = EXECUTE_COMPLETE;
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
