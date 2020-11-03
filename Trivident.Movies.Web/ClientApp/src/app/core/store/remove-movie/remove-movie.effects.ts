import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { RemoveMovieService } from '../../../shared';
import { RemoveMovieActions } from './remove-movie.actions';
import { IAppState } from '../app-state.interface';
import { Store } from '@ngrx/store';
import { MoviesActions } from '../movies';

@Injectable()
export class RemoveMovieEffects {
  constructor(
    private readonly service: RemoveMovieService,
    private readonly actions$: Actions,
    private readonly store: Store<IAppState>
  ) {}

  @Effect()
  RemoveMovie$ = this.actions$.pipe(
    ofType<RemoveMovieActions.Execute>(RemoveMovieActions.EXECUTE),
    switchMap(action => {
      return this.service.exec(action.payload.id).pipe(
        map(res => new RemoveMovieActions.ExecuteComplete()),
        catchError((err: HttpErrorResponse) => of(new RemoveMovieActions.ExecuteError(err)))
      );
    })
  );

  @Effect({ dispatch: false })
  RemoveMovieSuccess$ = this.actions$.pipe(
     ofType<RemoveMovieActions.ExecuteComplete>(RemoveMovieActions.EXECUTE_COMPLETE),
     tap(() => {
      this.store.dispatch(new MoviesActions.LoadReset());
      this.store.dispatch(new MoviesActions.Load());
     })
   );
}
