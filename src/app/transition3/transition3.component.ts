import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-transition3',
  templateUrl: './transition3.component.html',
  styleUrls: ['./transition3.component.css'],
  animations: [
    trigger('myTrigger', [
      transition(':increment', [
        style({
          opacity: 0
        }),
        animate(100, style({
          opacity: 1,
          transform: 'translateY(-30%)'
        })),
      ]),
      transition(':decrement', [
        style({
          opacity: 0,
        }),
        animate(100, style({
          opacity: 1,
          transform: 'translateY(30%)'
        })),
      ])
    ])
  ]
})
export class Transition3Component implements OnInit {
  title: string;
  count = 0;

  constructor() { }

  ngOnInit() {
    this.title = 'transition';
  }

  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }

}
