import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lista zadań';

  getFooter() {
    return '2019 © Lista zadań zbudowana w Angularze.';
  }
}
