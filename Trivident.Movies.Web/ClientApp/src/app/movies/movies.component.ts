import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IAppState, MoviesActions, selectMovies } from '../core/store';
import { Movie } from '../shared';

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html'
})
export class MoviesComponent implements OnInit {
  public movies$: Observable<Movie[]>;

  constructor(private readonly store: Store<IAppState>) {}

  public ngOnInit() {
    this.store.dispatch(new MoviesActions.Load());
    this.movies$ = this.store.pipe(select(selectMovies));
  }
}
