import { Component, OnInit } from '@angular/core';
import * as Rx from 'rxjs';
@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const observable = Rx.Observable.create((observer) => {
      observer.next('A');
      observer.next('n');
      observer.next('g');
      observer.next('u');
      observer.next('l');
      observer.next('a');
      setTimeout(() => {
        observer.next('r');
        observer.complete();
      }, 1000)
    });
    observable.subscribe({
      next: (str) => {
        console.log(str);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('デベロッパーズガイド');
      }
    });


    // Subjectを利用
    const subject = new Rx.Subject();

    subject.subscribe({
      next: (x) => {
        console.log(x);
      }
    });
    subject.next('Angular');
    subject.next('デベロッパーズガイド');

    // Promise
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Angular');
      }, 1000);
    });

    const promiseOb = Rx.Observable.fromPromise(promise);
    promiseOb.subscribe({
      next: (x) => {
        console.log(x);
      }
    });

    // toPromise
    const promiseFromObservable = Rx.Observable.of('Angular').toPromise();
    promise.then((x) => {
      console.log(x);
    })
  }
}
