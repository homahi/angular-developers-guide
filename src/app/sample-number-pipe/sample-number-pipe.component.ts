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
  data: any = {
    'Kanto': [
      {
        'name': '東京都',
        'population': 12369185
      },
      {
        'name': '神奈川県',
        'population': 8687422
      },
      {
        'name': '埼玉県',
        'population': 7037849
      },
      {
        'name': '千葉県',
        'population': 6028315
      }
    ]
  }

  constructor() { }

  ngOnInit() {
    this.euro = 100000.12;
    this.str = 'aNgUlAr';
  }

}
