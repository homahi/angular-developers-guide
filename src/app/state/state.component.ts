import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css'],
  animations: [
    trigger('myTrigger', [
      state('off', style({
        width: '200px',
        height: '100px'
      })),
      state('on', style({
        opacity: 0.5,
        width: '100px',
        height: '200px'
      })),
      transition('off=>on', [
        animate('1s')
      ])
    ])
  ]
})
export class StateComponent implements OnInit {

  title: string;
  animState: string;

  constructor() { }

  ngOnInit() {
    this.title = 'state';
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
