import { Component, OnInit } from '@angular/core';
import { group, sequence, state, trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css'],
  animations: [
    trigger('myTrigger', [
      transition(':enter', [
        sequence([
          animate('1s', style({
            width: '100px'
          })),
          group([
            animate('2s', style({
              height: '200px'
            })),
            animate('0.5s', style({
              opacity: 0.5
            })),
            animate('1s', style({
              width: '*',
              opacity: 1
            })),
          ])
        ])
      ])
    ])
  ]
})
export class GroupComponent implements OnInit {
  title: string;
  visible = false;

  constructor() { }

  ngOnInit() {
    this.title = 'group';
  }
  click() {
    this.visible = !this.visible;
  }

}
