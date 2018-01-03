import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-animate',
  templateUrl: './animate.component.html',
  styleUrls: ['./animate.component.css'],
  animations: [
    trigger('myTrigger', [
      transition(':enter', [
        style({ height: '0px' }),
        animate('1s 100ms ease-in', style({
          height: '100px'
        }))
      ])
    ])
  ]
})
export class AnimateComponent implements OnInit {

  title: string;
  visible = false;

  constructor() { }

  ngOnInit() {
    this.title = 'animate';
  }

  click() {
    this.visible = !this.visible;
  }
}
