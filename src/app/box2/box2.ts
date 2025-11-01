import { SlicePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'box2',
  imports: [SlicePipe, UpperCasePipe],
  templateUrl: './box2.html',
  styleUrl: './box2.css',
})
export class Box2 {
  description =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas veniam, temporibus minima dolor consequatur, optio commodi nihil eius deleniti in dolore rerum, reiciendis laudantium nesciunt facilis! Cumque eius amet asperiores.';
}
