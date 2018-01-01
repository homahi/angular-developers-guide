import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css'],
  interpolation: ['[%', '%]']
})
export class InterpolationComponent implements OnInit {
  message: string;

  constructor() {
  }

  ngOnInit() {
    this.message = 'Change delimiters';
  }

}
