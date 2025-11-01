import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Counter } from './counter/counter';

@Component({
  selector: 'app-root',
  imports: [FormsModule, Counter],
  templateUrl: './app3.html',
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

  text = signal('');
  text2 = signal('');

  startCounter = signal(100);

  number = signal(10);

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

  increaseStartCounter() {
    this.startCounter.update((v) => v + 50);
  }

  messageReceived = signal('');

  onMessageReceived(message: string) {
    this.messageReceived.set(message);
  }
}
