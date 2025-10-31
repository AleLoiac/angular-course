import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
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
  doubleCounter = computed(() => this.counter() * 2);

  text = signal('');
  text2 = signal('');

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

  setText2(e: Event) {
    if (e.target instanceof HTMLInputElement) {
      this.text2.set(e.target.value);
    }
    // we can also use Typescript assertions this.text2.set((e.target as HTMLInputElement).value);
  }
}
