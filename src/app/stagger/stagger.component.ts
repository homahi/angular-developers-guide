import { Component, OnInit } from '@angular/core';
import { query, transition, trigger, stagger, animate, style } from '@angular/animations';

@Component({
  selector: 'app-stagger',
  templateUrl: './stagger.component.html',
  styleUrls: ['./stagger.component.css'],
  animations: [
    trigger('myTrigger', [
      transition('0 => *', [
        query(':enter', [
          style({
            transform: 'translateX(-100%)'
          }),
          stagger(100, animate(500, style({
            transform: 'translateX(0)'
          })))
        ])
      ])
    ])
  ]
})
export class StaggerComponent implements OnInit {
  title: string;
  items = [];

  constructor() { }

  ngOnInit() {
    this.title = 'stagger';
  }
  clickShow() {
    this.items = ['item1', 'item2', 'item3'];
  }
  clickRemove() {
    this.items = [];
  }

}
