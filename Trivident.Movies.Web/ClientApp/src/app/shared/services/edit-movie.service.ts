import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Movie } from '../models';

@Injectable({
  providedIn: 'root'
})
export class EditMovieService {
  private baseUrl: string;

  constructor(private readonly http: HttpClient) {
    this.baseUrl = '/api/movies';
  }

  public exec(movie: Movie): Observable<Movie> {
    return this.http.put<Movie>(`${this.baseUrl}/${movie.id}`, movie);
  }
}
