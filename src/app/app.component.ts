import { Component } from '@angular/core';
// import interfejsu Task
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: Task [] = [
    {
      name: 'Siłownia',
      deadline: '2020-01-02',
      done: false
    },
    {
      name: 'Nauka Angulara',
      deadline: '2020-01-03',
      done: false
    },
    {
      name: 'Sprzątanie kuwety',
      deadline: '2020-01-04',
      done: false
    }
  ];
  config: { [key: string]: string | Date } = null;

  constructor() {
    setTimeout(() => {
      this.config = {
        title: 'Lista zadań',
        footer: '© Lista zadań zbudowana w Angularze.',
        date: new Date()
      };
    }, 500);
  }
  // towrzymy metodę do czyszczenia listy
  clearTasks() {
    this.tasks = [];
  }

  // metoda tworzy zadanie i dodaje do listy zadań
  // dodajemy parametr name, któy otrzyma wartość z widoku HTML
  // dodajemy parametr date typu string
  createTask(name: string, date: string) {
    const task = {
      name: name, // przypisujemy name
      deadline: date, // przypisujemy datę
      done: false
    };
    this.tasks.push(task);
  }
}
