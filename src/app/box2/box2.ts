import { SlicePipe, UpperCasePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CapitalizePipe } from '../capitalize-pipe';
import { Students } from '../services/students';

@Component({
  selector: 'box2',
  imports: [SlicePipe, UpperCasePipe, CapitalizePipe],
  templateUrl: './box2.html',
  styleUrl: './box2.css',
})
export class Box2 {
  description =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas veniam, temporibus minima dolor consequatur, optio commodi nihil eius deleniti in dolore rerum, reiciendis laudantium nesciunt facilis! Cumque eius amet asperiores.';

  word = 'angular';

  students = inject(Students);
}
