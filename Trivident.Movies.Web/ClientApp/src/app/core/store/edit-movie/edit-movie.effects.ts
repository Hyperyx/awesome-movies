import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { EditMovieService } from '../../../shared';
import { EditMovieActions } from './edit-movie.actions';

@Injectable()
export class EditMovieEffects {
  constructor(
    private readonly service: EditMovieService,
    private readonly actions$: Actions,
    private readonly router: Router
  ) {}

  @Effect()
  editMovie$ = this.actions$.pipe(
    ofType<EditMovieActions.Execute>(EditMovieActions.EXECUTE),
    switchMap(action => {
      return this.service.exec(action.payload.movie).pipe(
        map(res => new EditMovieActions.ExecuteComplete(res)),
        catchError((err: HttpErrorResponse) => of(new EditMovieActions.ExecuteError(err)))
      );
    })
  );

  @Effect({ dispatch: false })
  editMovieSuccess$ = this.actions$.pipe(
     ofType<EditMovieActions.ExecuteComplete>(EditMovieActions.EXECUTE_COMPLETE),
     tap(() => this.router.navigate(['movies']))
   );
}
