import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, animation, useAnimation } from '@angular/animations';
import { externalAnimation } from '../external-animation';

@Component({
  selector: 'app-use-animation',
  templateUrl: './use-animation.component.html',
  styleUrls: ['./use-animation.component.css'],
  animations: [
    trigger('myTrigger', [
      transition(':enter', [
        style({
          opacity: 0,
          width: '200px',
          height: '100px'
        }),
        useAnimation(externalAnimation)
      ])
    ])
  ]
})
export class UseAnimationComponent implements OnInit {
  title: string;
  visible = false;
  constructor() { }

  ngOnInit() {
    this.title = 'useAnimation';
  }

  click() {
    this.visible = !this.visible;
  }

}
