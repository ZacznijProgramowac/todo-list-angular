import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // nowy obiekt konfiguracyjny
  config: { [key: string]: string | Date } = null;

  constructor() {
    // dodajemy metodę setTimeout z opóźnieniem 500ms
    // w środku inicjalizujemy nasz obiekt config
    setTimeout(() => {
      // inicjalizacja obiektu
      this.config = {
        title: 'Lista zadań',
        footer: '© Lista zadań zbudowana w Angularze.',
        date: new Date()
      };
    }, 500);
  }
}
