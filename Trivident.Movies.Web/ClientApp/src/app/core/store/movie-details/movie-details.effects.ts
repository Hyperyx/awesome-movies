import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { MovieDetailsService } from '../../../shared';
import { MovieDetailsActions } from './movie-details.actions';

@Injectable()
export class MovieDetailsEffects {
  constructor(private readonly service: MovieDetailsService, private readonly actions$: Actions) {}

  @Effect()
  load$ = this.actions$.pipe(
    ofType<MovieDetailsActions.Load>(MovieDetailsActions.LOAD),
    switchMap(action =>
      this.service.exec(action.payload.id).pipe(
        map(res => new MovieDetailsActions.LoadComplete(res)),
        catchError(err => of(new MovieDetailsActions.LoadError(err)))
      )
    )
  );
}
