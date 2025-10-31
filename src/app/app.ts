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

  students = [
    { id: 1, fn: 'Mario', ln: 'Rossi' },
    { id: 2, fn: 'Luigi', ln: 'Verdi' },
    { id: 3, fn: 'Laura', ln: 'Neri' },
    { id: 4, fn: 'Anna', ln: 'Bianchi' },
  ];
}
