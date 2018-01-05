import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample-number-pipe',
  templateUrl: './sample-number-pipe.component.html',
  styleUrls: ['./sample-number-pipe.component.css']
})
export class SampleNumberPipeComponent implements OnInit {
  pi: number = 3.141;
  e: number = 2.718281828459045;
  public euro = 0;
  public str: string = ';'
  public date: Date = new Date('2014-04-01');
  a = 0.2577711;
  b = 100.34959999;

  constructor() { }

  ngOnInit() {
    this.euro = 100000.12;
    this.str = 'aNgUlAr';
  }

}
