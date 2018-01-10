import { ElementRef, Directive, Component, OnInit } from '@angular/core';

@Directive({
  selector: '[appCounterColor]',
  inputs: ['appCounterColor']
})
export class CounteColorDirective implements OnInit {
  appCounterColor: string;
  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.el.nativeElement.style.color = this.appCounterColor;
  }
}

@Component({
  selector: 'app-inputs-counter',
  template: '<p>{{count}}</p>',
  inputs: ['count']
})
export class CounterComponent {
  count: number;
  constructor() { }
}

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent implements OnInit {
  count = 0;

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.count++;
    }, 1000);
  }

}
