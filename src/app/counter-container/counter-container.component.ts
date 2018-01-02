import { EventEmitter, Input, Output, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <p>{{count}}</p>
    <button (click)="decrement()">-1</button>
    <button (click)="increment()">+1</button>
  `
})
export class InputCounterComponent {
  @Input() count: number;
  @Output() changeCount = new EventEmitter<number>();
  constructor() {
  }

  increment() {
    this.changeCount.emit(1);
  }
  decrement() { this.changeCount.emit(-1); }
}

@Component({
  selector: 'app-counter-container',
  templateUrl: './counter-container.component.html',
  styleUrls: ['./counter-container.component.css']
})
export class CounterContainerComponent implements OnInit {
  count: number;

  constructor() { }

  ngOnInit() {
    this.count = Math.floor((Math.random() * 10));
  }
  change(value: number) {
    this.count += value;
  }
  reset() {
    this.count = 0;
  }

}
