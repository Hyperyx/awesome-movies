import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { AddMovieService } from '../../../shared';
import { AddMovieActions } from './add-movie.actions';

@Injectable()
export class AddMovieEffects {
  constructor(
    private readonly service: AddMovieService,
    private readonly actions$: Actions,
    private readonly router: Router
  ) {}

  @Effect()
  addMovie$ = this.actions$.pipe(
    ofType<AddMovieActions.Execute>(AddMovieActions.EXECUTE),
    switchMap(action => {
      return this.service.exec(action.payload.movie).pipe(
        map(res => new AddMovieActions.ExecuteComplete(res)),
        catchError((err: HttpErrorResponse) => of(new AddMovieActions.ExecuteError(err)))
      );
    })
  );

  @Effect({ dispatch: false })
  addMovieSuccess$ = this.actions$.pipe(
     ofType<AddMovieActions.ExecuteComplete>(AddMovieActions.EXECUTE_COMPLETE),
     tap(() => this.router.navigate(['movies']))
   );
}
