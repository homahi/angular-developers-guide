import { Injectable, Component, OnInit } from '@angular/core';
import { SampleService } from '../sample.service';

@Injectable()
class MockSampleService {
  message: string;
  constructor() {
    this.message = 'This is mock service';
  }
}

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.css'],
  providers: [
    { provide: SampleService, useClass: MockSampleService }
  ]
})
export class ProvidersComponent implements OnInit {
  message: string;

  constructor(service: SampleService) {
    this.message = service.message;
  }

  ngOnInit() {
  }

}
