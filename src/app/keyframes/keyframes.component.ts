import { Component, OnInit } from '@angular/core';
import { state, keyframes, trigger, transition, animate, style } from '@angular/animations';
@Component({
  selector: 'app-keyframes',
  templateUrl: './keyframes.component.html',
  styleUrls: ['./keyframes.component.css'],
  animations: [
    trigger('myTrigger', [
      transition(':enter', [
        animate('4s', keyframes([
          style({
            width: '100px',
            offset: 0.25
          }),
          style({
            opacity: 0.5,
            width: '200px',
            offset: 0.75
          }),
          style({
            opacity: 1,
            width: '*',
            offset: 1
          })
        ]))
      ])
    ])
  ]
})
export class KeyframesComponent implements OnInit {


  title: string;
  visible = false;

  constructor() { }

  ngOnInit() {
    this.title = 'keyframes';
  }
  click() {
    this.visible = !this.visible;
  }

}
