import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private readonly store: Store<IAppState>, private readonly router: Router) {}

  public ngOnInit() {
    this.store.dispatch(new MoviesActions.Load());
    this.movies$ = this.store.pipe(select(selectMovies));
  }

  public onMovieClick(id: string) {
    this.router.navigateByUrl(`/movies/${id}`);
  }
}
