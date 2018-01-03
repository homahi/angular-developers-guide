import { Input, EventEmitter, Output, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-with-setter',
  templateUrl: './counter-with-setter.component.html',
  styleUrls: ['./counter-with-setter.component.css']
})
export class CounterWithSetterComponent implements OnInit {
  private _count: number;

  @Output() changeCount = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  @Input()
  set count(count: number) {
    this._count = count * 2;
  }

  get count() {
    return this._count;
  }

  increment() {
    this.changeCount.emit(1);
  }
  decrement() {
    this.changeCount.emit(-1);
  }

}

@Component({
  selector: 'app-counter-container-with-setter',
  template: `
    <app-counter-with-setter [count]="count" (changeCount)="change($event)">
    </app-counter-with-setter>
    <button (click)="reset()">Reset</button>
  `
})
export class CounterContainerWithSetterComponent implements OnInit {
  count: number;
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
