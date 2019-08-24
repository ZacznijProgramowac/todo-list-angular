import { Component } from '@angular/core';
import { Task } from './task';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  editMode = false;
  taskName = 'Sugerowane zadanie codzienne: odkurzanie';
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
      done: true
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
    this.sort();
  }

  clearTasks() {
    this.tasks = [];
  }

  createTask() {
    const task = {
      name: this.taskName,
      deadline: this.taskDate,
      done: false
    };
    this.tasks.push(task);
    this.taskName = '';
    this.sort(); // dodajemy sortowanie
  }

  // dodajemy metodę delete
  delete(task: Task) {
    this.tasks = this.tasks.filter(e => e !== task);
  }

  // dodajemy metodę markAsDone
  markAsDone(task: Task) {
    const taskDone = this.tasks.find(e => e === task);
    taskDone.done = true;
    this.sort(); // dodajemy sortowanie
  }

  // dodajemy sortowanie
  private sort() {
    this.tasks = this.tasks.sort((a: Task, b: Task) => (a.done === b.done) ? 0 : a.done ? 1 : -1);
  }

  private sort2() {
    this.tasks = this.tasks.sort((a: Task, b: Task) => {
      if (a.done === b.done) {
        return 0;
      } else if (a.done) {
        return 1;
      }
      return -1;
    });
  }
}
