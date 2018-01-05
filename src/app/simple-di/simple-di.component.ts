import { Component, OnInit } from '@angular/core';
import { SimpleDiService } from '../simple-di.service';
import { UseClassService } from '../use-class.service';
@Component({
  selector: 'app-simple-di',
  templateUrl: './simple-di.component.html',
  styleUrls: ['./simple-di.component.css'],
  providers: [
    SimpleDiService,
    { provide: SimpleDiService, useClass: UseClassService }
  ]
})
export class SimpleDiComponent implements OnInit {
  message: string;

  constructor(private simpleDiService: SimpleDiService) { }

  ngOnInit() {
    this.message = this.simpleDiService.message;
  }

}
