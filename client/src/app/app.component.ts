import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Teach.Me';
  count = 0;
  currentPage: string = 'Página Atual'
}
