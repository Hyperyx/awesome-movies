import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { EditMovieActions, IAppState, selectEditMovieLoading, selectEditMovieFailed, RemoveMovieActions, AddMovieActions } from '../core/store';
import { Movie, MovieForm } from '../shared';

@Component({
  selector: 'edit-movie-form',
  templateUrl: './edit-movie-form.component.html'
})
export class EditMovieFormComponent implements OnInit {
  @Input()
  public movie: Movie;
  public form: MovieForm;
  public editMovieLoading$: Observable<boolean>;
  public editMovieFailed$: Observable<boolean>;

  constructor(
    private readonly store: Store<IAppState>,
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router) {}

  public ngOnInit() {
    this.store.dispatch(new EditMovieActions.ExecuteReset());
    this.editMovieLoading$ = this.store.pipe(select(selectEditMovieLoading));
    this.editMovieFailed$ = this.store.pipe(select(selectEditMovieFailed));
    this.form = new MovieForm(this.movie);
  }

  public goBack(): void {
    this.router.navigate(['movies']);
  }

  public onSubmit(): void {
    if (this.form.valid) {
      const model: Movie = JSON.parse(JSON.stringify(this.form.getModel()));
      this.store.dispatch(new AddMovieActions.ExecuteReset());
      this.store.dispatch(new RemoveMovieActions.ExecuteReset());
      this.store.dispatch(new EditMovieActions.Execute(model));
    }
  }
}
