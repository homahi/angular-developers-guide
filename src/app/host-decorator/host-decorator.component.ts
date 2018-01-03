import { HostListener,HostBinding,Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-host-decorator-child',
  template: `
  <div>Toggle color</div>
  `
})
export class HostDecoratorChildComponent {
  @HostBinding('class.red') isRed = false;
  @HostBinding('class.blue') isBlue = true;
  @HostBinding('attr.role') role = 'button';

  @HostListener('click',['$event'])
  onClick(ev) {
    console.log(ev.target);
    this.isRed = !this.isRed;
    this.isBlue = !this.isBlue;
  }
};

@Component({
  selector: 'app-host-decorator',
  templateUrl: './host-decorator.component.html',
  styleUrls: ['./host-decorator.component.css']
})
export class HostDecoratorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
