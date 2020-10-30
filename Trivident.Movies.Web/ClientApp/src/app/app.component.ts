import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  public opened: boolean = false;

  public toggleSidebar() {
    this.opened = !this.opened;
  }
}
