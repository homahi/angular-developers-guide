import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-animation-style',
  templateUrl: './animation-style.component.html',
  styleUrls: ['./animation-style.component.css'],
  animations: [
    trigger('myTrigger', [
      transition(':enter', [
        style({ height: '0px' }),
        animate('1s', style({
          height: '100px'
        }))
      ])
    ])
  ]
})
export class AnimationStyleComponent implements OnInit {
  title: string;
  visible = false;

  constructor() { }

  ngOnInit() {
    this.title = 'style';
  }

  click() {
    this.visible = !this.visible;
  }

}
