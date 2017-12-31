import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle-color',
  host: {
    '(click)': 'onClick($event)',
    '[class.red]': 'isRed',
    '[class.blue]': 'isBlue'
  },
  template: '<div>Toggle color</div>'
})
export class ToggleColorComponent {
  isRed = false;
  isBlue = true;

  onClick(ev) {
    console.log(ev.target);
    this.isRed = !this.isRed;
    this.isBlue = !this.isBlue;
  }
}

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.css']
})
export class HostComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
