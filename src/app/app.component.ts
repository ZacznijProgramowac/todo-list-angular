import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lista zadań';

  // usuwamy datę ze zwracanego tekstu
  getFooter(): string {
    return '© Lista zadań zbudowana w Angularze.';
  }

  // dodajemy nową metodę, która zwraca datę
  getDate(): Date {
    return new Date();
  }
}
