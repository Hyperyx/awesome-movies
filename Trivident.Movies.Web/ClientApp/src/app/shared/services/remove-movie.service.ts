import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Movie } from '../models';

@Injectable({
  providedIn: 'root'
})
export class RemoveMovieService {
  private baseUrl: string;

  constructor(private readonly http: HttpClient) {
    this.baseUrl = '/api/movies';
  }

  public exec(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
