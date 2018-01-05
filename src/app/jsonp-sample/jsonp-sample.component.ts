import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-jsonp-sample',
  templateUrl: './jsonp-sample.component.html',
  styleUrls: ['./jsonp-sample.component.css']
})
export class JsonpSampleComponent implements OnInit {
  data;
  list: string[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
//    this.http.jsonp('./assets/data.jsonp?callback=callback','callback').subscribe(data => this.data = data);
    return this.http.get<string[]>('./assets/data.jsonp').subscribe(list => this.list = list);
  }

}
