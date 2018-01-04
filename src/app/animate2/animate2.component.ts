import { Component, OnInit } from '@angular/core';
import { state, trigger, transition, animate, style } from '@angular/animations';
@Component({
  selector: 'app-animate2',
  templateUrl: './animate2.component.html',
  styleUrls: ['./animate2.component.css'],
  animations: [
    trigger('myTrigger', [
      state('void', style({
        height: '0px'
      })),
      state('*', style({
        height: '100px'
      })),
      transition(':enter', [
        animate('1s 100ms ease-in')
      ])
    ])
  ]
})
export class Animate2Component implements OnInit {

  title: string;
  visible = false;

  constructor() { }

  ngOnInit() {
    this.title = 'animate2';
  }
  click() {
    this.visible = !this.visible;
  }

}
