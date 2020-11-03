import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { IAppState, MovieDetailsActions, selectMovieDetailsData, selectMovieDetailsLoading, selectMovieDetailsSucceeded } from '../core/store';
import { Movie, MovieForm } from '../shared';

@Component({
  selector: 'edit-movie',
  templateUrl: './edit-movie.component.html'
})
export class EditMovieComponent implements OnInit {
  public movie$: Observable<Movie>;
  public movieLoading$: Observable<boolean>;
  public movieSucceeded$: Observable<boolean>;
  public form: MovieForm;

  constructor(
    private readonly store: Store<IAppState>,
    private readonly activatedRoute: ActivatedRoute) {}

  public ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.store.dispatch(new MovieDetailsActions.Load(id));

    this.movie$ = this.store.pipe(select(selectMovieDetailsData));
    this.movieLoading$ = this.store.pipe(select(selectMovieDetailsLoading));
    this.movieSucceeded$ = this.store.pipe(select(selectMovieDetailsSucceeded));
  }
}
