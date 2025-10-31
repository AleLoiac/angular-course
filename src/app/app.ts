import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('App Angular');

  x = 10;

  students = signal([
    { id: 1, fn: 'Mario', ln: 'Rossi' },
    { id: 2, fn: 'Luigi', ln: 'Verdi' },
    { id: 3, fn: 'Laura', ln: 'Neri' },
    { id: 4, fn: 'Anna', ln: 'Bianchi' },
  ]);

  counter = signal(0);

  increaseCounter = () => {
    this.counter.update((value) => value + 1);
  };
  decreaseCounter = () => {
    this.counter.update((value) => value - 1);
  };
  setCounter = (v: number) => {
    this.counter.set(v);
  };

  addStudent = () => {
    const id = this.students().length + 1;
    const newStudent = {
      id,
      fn: `New Student FirstName` + id,
      ln: `New Student LastName` + id,
    };
    this.students.update((v) => [...v, newStudent]);
  };

  updateStudentInfo = (id: number) => {
    this.students.update((value) =>
      value.map((student) => (student.id === id ? { ...student, ln: 'Green' } : student))
    );
  };

  orderStudentsRandomly = () => {
    this.students.update((value) => value.sort(() => Math.random() - 0.5));
  };
}
