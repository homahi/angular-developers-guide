import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  a = 2;
  b = 3;
  c = 'Hello';
  d = 'Angular!';
  e = true;

  clickButton($event){
    console.log($event);
  }

  isDisabled = true;
  imagePath = 'http://angular.io/assets/images/logos/angular/angular.svg';
}
