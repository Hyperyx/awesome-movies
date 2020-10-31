import { HttpErrorResponse } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { Movie } from '../../../shared/models';

export namespace MoviesActions
{
  export const LOAD = '[Movie] LOAD';
  export const LOAD_COMPLETE = '[Movie] LOAD_COMPLETE';
  export const LOAD_ERROR = '[Movie] LOAD_ERROR';

  export class Load implements Action {
    public readonly type = LOAD;
  }

  export class LoadComplete implements Action {
    public readonly type = LOAD_COMPLETE;
    public readonly payload: { data?: Movie[] };

    constructor(movies?: Movie[]) {
      this.payload = {
        data: movies
      };
    }
  }

  export class LoadError implements Action {
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

  export type Actions = Load | LoadComplete | LoadError;
}
