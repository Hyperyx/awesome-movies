import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMovieComponent } from './add-movie';
import { EditMovieComponent } from './edit-movie';
import { MovieDetailsComponent } from './movie-details';
import { MoviesComponent } from './movies';

const routes: Routes = [
  { path: '', component: MoviesComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'movies/add', component: AddMovieComponent },
  { path: 'movies/:id/edit', component: EditMovieComponent },
  { path: 'movies/:id', component: MovieDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
