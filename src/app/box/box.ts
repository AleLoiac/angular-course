import { NgClass, NgStyle } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'box',
  imports: [NgClass, NgStyle],
  templateUrl: './box.html',
  styles: `
  .box { background-color: lightblue; }
  .btn { padding: 10px; color: white; }
  .btn-primary { background-color: blue; }
  .btn-danger { background-color: red; }
  `,
})
export class Box {
  isBox = signal(true);

  bg = signal('lightgreen');
  width = signal(200);

  isPrimary = signal(true);
  isDanger = signal(false);

  fontSize = 30;

  toggleBoxSignal() {
    this.isBox.update((v) => !v);
  }

  toggleBg() {
    this.bg.update((v) => (v === 'lightgreen' ? 'red' : 'lightgreen'));
  }

  changeWidth() {
    this.width.update((v) => (v === 200 ? 400 : 200));
  }
}
