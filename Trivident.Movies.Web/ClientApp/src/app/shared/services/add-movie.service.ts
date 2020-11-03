import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Movie } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AddMovieService {
  private baseUrl: string;

  constructor(private readonly http: HttpClient) {
    this.baseUrl = '/api/movies';
  }

  public exec(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(this.baseUrl, movie);
  }
}
