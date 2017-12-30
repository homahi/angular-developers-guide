import { Input, Output, EventEmitter, Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() person: any;
  @Output() selected = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  click(person): any {
    this.selected.emit(person);
  }

}
