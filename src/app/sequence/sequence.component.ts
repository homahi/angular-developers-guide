import { Component, OnInit } from '@angular/core';
import { sequence, group, state, trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-sequence',
  templateUrl: './sequence.component.html',
  styleUrls: ['./sequence.component.css'],
  animations: [
    trigger('myTrigger', [
      transition('off => on', [
        group([
          sequence([
            style({
              opacity: 0.2
            }),
            animate('1s', style({
              opacity: 0.5
            })),
            animate('1s', style({
              height: '200px'
            }))
          ])
        ])
      ])
    ])
  ]
})
export class SequenceComponent implements OnInit {
  title: string;
  animState: string;

  constructor() { }

  ngOnInit() {
    this.title = 'sequence';
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
