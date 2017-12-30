import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {
  directives = [
    'NgClass',
    'NgForOf',
    'NgIf',
    'NgPlural',
    'NgSwitch',
  ]
  constructor() { }

  ngOnInit() {
  }

}
