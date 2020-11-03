import { AbstractControl } from '@angular/forms';

export class CustomValidator{
  static movieYear(control: AbstractControl) {
    let val = control.value;

    if (val === null || val === '') return null;

    let validYear = +val > 1910 && +val <= new Date().getFullYear();
    if (!validYear) return { 'movieYear': true };

    return null;
  }
}
