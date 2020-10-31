import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Movie } from '../models';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private baseUrl: string;

  constructor(private readonly http: HttpClient) {
    this.baseUrl = '/api/movies';
  }

  public exec(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.baseUrl);
  }
}
