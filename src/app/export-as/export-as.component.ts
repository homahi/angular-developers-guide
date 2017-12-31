import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-export-as-counter',
  template:'<p>{{count}}</p>',
  exportAs: 'counter'
    })
export class ExportAsCounterComponent{
  count:number;

  constructor(){}

  ngOnInit(){
    this.count = 0;
  }

  increment(){
    this.count++;
  }

  decrement(){
    this.count--;
  }
};

@Component({
  selector: 'app-export-as',
  templateUrl: './export-as.component.html',
  styleUrls: ['./export-as.component.css']
})
export class ExportAsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
