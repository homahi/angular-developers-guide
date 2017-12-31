import { Component, OnInit } from '@angular/core';
import { SampleService } from '../sample.service';
import { MockSampleService } from '../mock-sample.service';

@Component({
  selector: 'app-view-providers-view-child',
  template: `
  <h2>This is View Child</h2>
  <p>{{message}}</p>
  `
})
export class ViewChildComponent implements OnInit {
  message: string;

  constructor(private service: SampleService) {

  }

  ngOnInit() {
    this.message = this.service.message;
  }
}

@Component({
  selector: 'app-view-providers-content-child',
  template: `
    <h2>This is Content Child</h2>
    <p>{{message}}</p>
    `
})
export class ContentChildComponent implements OnInit {
  message: string;

  constructor(private service: SampleService) { }

  ngOnInit() {
    this.message = this.service.message;
  }
}

@Component({
  selector: 'app-view-providers',
  templateUrl: './view-providers.component.html',
  styleUrls: ['./view-providers.component.css'],
  viewProviders: [
    { provide: SampleService, useClass: MockSampleService }
  ]
})
export class ViewProvidersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'app-view-providers-container',
  template: `
  <app-view-providers>
  <app-view-providers-content-child></app-view-providers-content-child></app-view-providers>
        `
})
export class ViewProvidersContainerComponent {

}
