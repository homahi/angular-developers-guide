import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

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

  constructor(public translate: TranslateService) {
    translate.setDefaultLang('ja');
  }
  changeLang(lang:string){
    this.translate.use(lang);
  }
  clickButton($event) {
    console.log($event);
  }

  isDisabled = true;
  imagePath = 'http://angular.io/assets/images/logos/angular/angular.svg';

  // 2-4-1
  colspanSize = 2;
}
