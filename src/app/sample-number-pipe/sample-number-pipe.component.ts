import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
@Component({
  selector: 'app-sample-number-pipe',
  templateUrl: './sample-number-pipe.component.html',
  styleUrls: ['./sample-number-pipe.component.css']
})
export class SampleNumberPipeComponent implements OnInit {
  original = 'パイプ';
  timeObservable: Observable<string>;
  cats: string[] = ['三毛猫'];
  lang = 'ja';
  catMapping: { [k: string]: string } = { '=0': '0 cats.', '=1': 'One cat.', 'other': '# cats.' };
  langMap: any = { 'fi': 'Kissa', 'ja': '猫', 'other': 'Cat' }
  countObservable: Observable<number>;
  i = 0;
  pi: number = 3.141;
  e: number = 2.718281828459045;
  euro = 0;
  str: string = ';'
  date: Date = new Date('2014-04-01');
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

  constructor() {
    this.timeObservable = new Observable<string>((observer: Observer<string>) => {
      setInterval(() => observer.next(new Date().toString()), 1000);
    });
    this.countObservable = new Observable<number>((observer: Observer<number>) => {
      this.i = 0;
      setInterval(() => observer.next(this.i++), 1000);
    });
  }

  ngOnInit() {
    this.euro = 100000.12;
    this.str = 'aNgUlAr';
  }

}
