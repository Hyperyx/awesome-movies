import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IAppState, MovieDetailsActions, selectMovieDetails, selectMovies } from '../core/store';
import { Movie } from '../shared';

@Component({
  selector: 'movie-details',
  templateUrl: './movie-details.component.html'
})
export class MovieDetailsComponent implements OnInit {
  public movieDetails$: Observable<Movie>;
  public id: string;

  constructor(
    private readonly store: Store<IAppState>,
    private readonly route: ActivatedRoute,
    private readonly router: Router) {}

  public ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.store.dispatch(new MovieDetailsActions.Load(this.id));
    this.movieDetails$ = this.store.pipe(select(selectMovieDetails));
  }

  public goBack(): void {
    this.router.navigate(['movies']);
  }
}
