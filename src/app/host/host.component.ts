import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resize',
  host: {
    '(window:resize)': 'onResize()',
  },
  template: `
  <p>width: {{width}}px</p>
  <p>height: {{height}}px</p>
  `
})
export class ResizeComponent implements OnInit{
  width: number;
  height:number;

  ngOnInit(){
    this.setWindowSize();
  }

  onResize(){
    this.setWindowSize();
  }

  private setWindowSize(){
    this.width = window.innerWidth;
    this.height = window.innerHeight;
  }
}

@Component({
  selector: 'app-toggle-color',
  host: {
    '(click)': 'onClick($event)',
    '[class.red]': 'isRed',
    '[class.blue]': 'isBlue',
    'role': 'button'
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
