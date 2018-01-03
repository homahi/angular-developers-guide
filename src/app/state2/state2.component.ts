import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-state2',
  templateUrl: './state2.component.html',
  styleUrls: ['./state2.component.css'],
  animations: [
    trigger('myTrigger', [
      state('*', style({
        width: '200px',
        height: '200px'
      })),
      state('void', style({
        width: '100px',
        height: '100px'
      })),
      transition('void=>*', [
        animate('1s')
      ])
    ])
  ]
})
export class State2Component implements OnInit {
  title: string;
  animState: boolean;

  constructor() {
    this.title = 'state2';
    this.animState = false;
  }

  ngOnInit() {
  }
  click() {
    this.animState = !this.animState;
  }

}
