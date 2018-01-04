import { Component, OnInit } from '@angular/core';
import { query, animateChild, trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-animate-child',
  templateUrl: './animate-child.component.html',
  styleUrls: ['./animate-child.component.css'],
  animations: [
    trigger('myTrigger', [
      transition('off => on', [
        animate('1s', style({
          height: '200px'
        })),
        query('@myChildTrigger', [
          animateChild()
        ])
      ])
    ]),
    trigger('myChildTrigger', [
      transition('off=>on', [
        style({
          opacity: 0,
        }),
        animate('0.5s', style({
          opacity: 1,
          height: '100px'
        }))
      ])
    ])
  ]
})
export class AnimateChildComponent implements OnInit {
  title: string;
  animState: string;

  constructor() { }

  ngOnInit() {
    this.title = 'animateChild';
    this.animState = 'off';
  }
  click() {
    if (this.animState === 'off') {
      this.animState = 'on';
      return;
    }
    this.animState = 'off';
  }

}
