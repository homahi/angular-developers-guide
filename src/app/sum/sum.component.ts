import { Component, OnInit } from '@angular/core';
import { CalcService } from '../calc.service';

@Component({
  selector: 'app-sum',
  templateUrl: './sum.component.html',
  styleUrls: ['./sum.component.css']
})
export class SumComponent implements OnInit {
  model1 = 0;
  model2 = 0;
  result : number;

  constructor(private calcService: CalcService) { }

  ngOnInit() {
  }

  calc(){
    this.result = this.calcService.add(this.model1, this.model2);
  }

}
