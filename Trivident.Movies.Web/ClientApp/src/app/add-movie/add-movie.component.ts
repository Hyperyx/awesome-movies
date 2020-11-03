import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AddMovieActions, EditMovieActions, IAppState, RemoveMovieActions, selectAddMovieFailed, selectAddMovieLoading, selectAddMovieSucceeded } from '../core/store';
import { Movie, MovieForm } from '../shared';

@Component({
  selector: 'add-movie',
  templateUrl: './add-movie.component.html'
})
export class AddMovieComponent implements OnInit {
  public addMovieLoading$: Observable<boolean>;
  public addMovieFailed$: Observable<boolean>;
  public form: MovieForm;

  constructor(private readonly store: Store<IAppState>, private readonly router: Router) {}

  public ngOnInit() {
    this.store.dispatch(new AddMovieActions.ExecuteReset());
    this.addMovieLoading$ = this.store.pipe(select(selectAddMovieLoading));
    this.addMovieFailed$ = this.store.pipe(select(selectAddMovieFailed));
    this.form = new MovieForm();
  }

  public goBack(): void {
    this.router.navigate(['movies']);
  }

  public onSubmit(): void {
    if (this.form.valid) {
      const model: Movie = JSON.parse(JSON.stringify(this.form.getModel()));
      this.store.dispatch(new RemoveMovieActions.ExecuteReset());
      this.store.dispatch(new EditMovieActions.ExecuteReset());
      this.store.dispatch(new AddMovieActions.Execute(model));
    }
  }
}
