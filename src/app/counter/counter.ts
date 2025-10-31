import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'counter',
  imports: [],
  template: `
    <section class="counter">
      <div [title]="'Counter: ' + counter()">Counter: {{ counter() }}</div>
      <div>Double counter: {{ doubleCounter() }}</div>
      <div>
        <button (click)="increaseCounter()">Increase counter</button>
        <button (click)="decreaseCounter()">Decrease counter</button>
        <button (click)="setCounter(10)">Set counter to 10</button>
      </div>

      <div>
        @if (counter() > 10) {
        <div>Counter is bigger than 10!</div>
        }
      </div>
    </section>
  `,
  styles: `
  .counter {
    margin-block: 20px;
  }`,
})
export class Counter {
  counter = signal(0);
  doubleCounter = computed(() => this.counter() * 2);

  increaseCounter = () => {
    this.counter.update((value) => value + 1);
  };
  decreaseCounter = () => {
    this.counter.update((value) => value - 1);
  };
  setCounter = (v: number) => {
    this.counter.set(v);
  };
}
