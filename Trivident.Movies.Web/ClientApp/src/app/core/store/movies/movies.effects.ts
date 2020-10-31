import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { MoviesService } from '../../../shared';
import { MoviesActions } from './movies.actions';

@Injectable()
export class MoviesEffects {
  constructor(private readonly service: MoviesService, private readonly actions$: Actions) {}

  @Effect()
  load$ = this.actions$.pipe(
    ofType<MoviesActions.Load>(MoviesActions.LOAD),
    switchMap(() =>
      this.service.exec().pipe(
        map(res => new MoviesActions.LoadComplete(res)),
        catchError(err => of(new MoviesActions.LoadError(err)))
      )
    )
  );
}
