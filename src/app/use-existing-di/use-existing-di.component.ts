import { Component, OnInit } from '@angular/core';
import { UseExistingService } from '../use-existing.service';
import { DummyService } from '../dummy.service';

@Component({
  selector: 'app-use-existing-di',
  templateUrl: './use-existing-di.component.html',
  styleUrls: ['./use-existing-di.component.css']
})
export class UseExistingDiComponent implements OnInit {
  count: number;

  constructor(private useExistingService: UseExistingService, private dummyService: DummyService) {
  }

  ngOnInit() {
    this.count = this.useExistingService.count;
    this.count = this.dummyService.count;
  }

}
