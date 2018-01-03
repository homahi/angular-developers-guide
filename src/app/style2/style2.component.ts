import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-style2',
  templateUrl: './style2.component.html',
  styleUrls: ['./style2.component.css'],
  animations: [
    trigger('myTrigger', [
      transition(':enter', [
        style({
          height: '0px'
        }),
        animate('1s', style({
          height: '*'
        }))
      ])
    ])
  ]
})
export class Style2Component implements OnInit {

  title: string;
  visible = false;
  constructor() { }

  ngOnInit() {
    this.title = 'style2';
  }

  click() {
    this.visible = !this.visible;
  }

}
