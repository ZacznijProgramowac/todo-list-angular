import { Component } from '@angular/core';
import { Task } from './task';
// nowy import biblioteki moment
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // nowe pole w klasie kompoenntu
  taskName = 'Sugerowane zadanie codzienne: odkurzanie';
  // nowe pole reprezentujące datę
  taskDate = moment().format('YYYY-MM-DD');
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

  clearTasks() {
    this.tasks = [];
  }

  // Usuwamy parametry z metody
  createTask() {
    const task = {
      name: this.taskName, // do nazwy przypisujemy pole taskName
      deadline: this.taskDate, // do daty podstawimy pole taskDate
      done: false
    };
    this.tasks.push(task);
    this.taskName = ''; // po dodaniu zadania, czyścimy pole
  }
}
