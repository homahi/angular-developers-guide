import { EventEmitter, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-outputs-counter',
  template: `
  <button (click)="decrement()">-1</button>
  <button (click)="increment()">+1</button>
  `,
  outputs: ['changeCount']
})
export class OutputsCounterComponent {
  changeCount = new EventEmitter<number>();

  constructor() { }

  increment() {
    this.changeCount.emit(1);
  }

  decrement() {
    this.changeCount.emit(-1);
  }
}

@Component({
  selector: 'app-outputs',
  templateUrl: './outputs.component.html',
  styleUrls: ['./outputs.component.css']
})
export class OutputsComponent implements OnInit {
  count = 0;
  constructor() { }

  ngOnInit() {
  }
  change(value: number) {
    this.count += value;
  }


}
