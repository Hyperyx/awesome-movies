import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as mongoose from 'mongoose';
import { Movie } from '..';
import { CustomValidator } from './custom.validator';

export class MovieForm extends FormGroup {
  constructor(movie?: Movie) {
    super({
      id: new FormControl(movie ? movie.id :  mongoose.Types.ObjectId(), [Validators.required, Validators.maxLength(24)]),
      title: new FormControl(movie ? movie.title : undefined, [Validators.required, Validators.maxLength(200)]),
      director: new FormControl(movie ? movie.director : undefined, [Validators.required, Validators.maxLength(200)]),
      actors: new FormControl(movie ? movie.actors : undefined, [Validators.required, Validators.maxLength(200)]),
      image: new FormControl(movie ? movie.image : undefined, [Validators.required, Validators.maxLength(2048)]),
      year: new FormControl(movie ? movie.year : undefined, [Validators.required, Validators.maxLength(4), CustomValidator.movieYear])
    })
  }

  public getModel(): Movie {
    return {
      id: this.value.id,
      title: this.value.title,
      director: this.value.director,
      actors: this.value.actors,
      image: this.value.image,
      year: +this.value.year
    };
  }
}
