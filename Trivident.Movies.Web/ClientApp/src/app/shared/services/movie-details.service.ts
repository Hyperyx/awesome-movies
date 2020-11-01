import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Movie } from '../models';

@Injectable({
  providedIn: 'root'
})
export class MovieDetailsService {
  private baseUrl: string;

  constructor(private readonly http: HttpClient) {
    this.baseUrl = '/api/movies';
  }

  public exec(id: string): Observable<Movie> {
    return this.http.get<Movie>(`${this.baseUrl}/${id}`);
  }
}
