import { Component, OnInit } from '@angular/core';
import { query, state, trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css'],
  animations: [
    trigger('myTrigger', [
      transition('off => on', [
        query('.contents', style({
          opacity: 0
        })),
        query(':self', [
          style({
            height: 0
          }),
          animate(1000, style({
            height: '*'
          }))
        ]),
        query('.contents', animate(1500, style({
          opacity: 1
        })))
      ])
    ])
  ]
})
export class QueryComponent implements OnInit {
  title: string;
  animState: string;

  constructor() { }

  ngOnInit() {
    this.title = 'query';
    this.animState = 'off';
  }

  click() {
    if (this.animState === 'off') {
      this.animState = 'on';
      return;
    }
    this.animState='off';
  }

}
