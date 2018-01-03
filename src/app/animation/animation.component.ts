import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations: [
    trigger('myTrigger', [
      state('from', style({'opacity': 0})),
      state('to', style({'opacity': 1})),
      transition('on => off', [
        animate('1s')
      ]),
    ])
  ]
})
export class AnimationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
