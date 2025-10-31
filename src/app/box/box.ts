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

  toggleBoxSignal() {
    this.isBox.update((v) => !v);
  }
}
