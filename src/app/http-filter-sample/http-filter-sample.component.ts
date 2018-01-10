import { Component, OnInit } from '@angular/core';

import { HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/concat';
import 'rxjs/add/operator/filter';
export interface IPerson {
  name: string;
  age: number;
}

@Component({
  selector: 'app-http-filter-sample',
  templateUrl: './http-filter-sample.component.html',
  styleUrls: ['./http-filter-sample.component.css']
})
export class HttpFilterSampleComponent implements OnInit {
  list: IPerson[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    const headers = new HttpHeaders();
    const params = new HttpParams();
    params.append('foo', 'bar');
    headers.append('X-Api-Token', 'token');
    const options = {
      params: params,
      headers: headers
    };
    this.http.get<IPerson[]>('./assets/filter.json', options)
      .flatMap((persons: IPerson[]) => persons)
      .filter((person: IPerson) => person.age >= 18)
      .subscribe((person: IPerson) => this.list.push(person));
  }

}
