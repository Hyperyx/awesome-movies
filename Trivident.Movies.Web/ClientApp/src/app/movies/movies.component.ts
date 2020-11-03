import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Movie } from '../shared';
import { AddMovieActions, EditMovieActions, IAppState, MoviesActions, RemoveMovieActions, selectAddMovieSucceeded, selectEditMovieSucceeded, selectMoviesData, selectMoviesFailed, selectMoviesLoading, selectMoviesSucceeded, selectRemoveMovieLoading, selectRemoveMovieSucceeded } from '../core/store';

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html'
})
export class MoviesComponent implements OnInit {
  public addMovieSucceeded$: Observable<boolean>;
  public editMovieSucceeded$: Observable<boolean>;
  public removeMovieSucceeded$: Observable<boolean>;
  public removeMovieLoading$: Observable<boolean>;
  public moviesLoading$: Observable<boolean>;
  public movies$: Observable<Movie[]>;
  public moviesSucceeded$: Observable<boolean>;
  public moviesFailed$: Observable<boolean>;

  constructor(private readonly store: Store<IAppState>, private readonly router: Router) {}

  public ngOnInit() {
    this.store.dispatch(new MoviesActions.LoadReset());
    this.store.dispatch(new MoviesActions.Load());
    this.store.dispatch(new RemoveMovieActions.ExecuteReset());

    this.addMovieSucceeded$ = this.store.pipe(select(selectAddMovieSucceeded));
    this.editMovieSucceeded$ = this.store.pipe(select(selectEditMovieSucceeded));
    this.removeMovieSucceeded$ = this.store.pipe(select(selectRemoveMovieSucceeded));
    this.removeMovieLoading$ = this.store.pipe(select(selectRemoveMovieLoading));
    this.moviesLoading$ = this.store.pipe(select(selectMoviesLoading));
    this.movies$ = this.store.pipe(select(selectMoviesData));
    this.moviesSucceeded$ = this.store.pipe(select(selectMoviesSucceeded));
    this.moviesFailed$ = this.store.pipe(select(selectMoviesFailed));
  }

  public onAddClick() {
    this.router.navigateByUrl('/movies/add');
  }

  public onMovieClick(id: string) {
    this.router.navigateByUrl(`/movies/${id}`);
  }

  public onEditClick(id: string) {
    this.router.navigateByUrl(`/movies/${id}/edit`);
  }

  public onRemoveClick(id: string) {
    this.store.dispatch(new AddMovieActions.ExecuteReset());
    this.store.dispatch(new EditMovieActions.ExecuteReset());
    this.store.dispatch(new RemoveMovieActions.Execute(id));
  }
}
