import { Component, signal } from '@angular/core';

@Component({
  selector: 'box',
  imports: [],
  templateUrl: './box.html',
  styles: `
  .box {
    background-color: lightblue;
  }
  `,
})
export class Box {
  isBox = signal(true);
  bg = signal('lightgreen');
  width = signal(200);

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
