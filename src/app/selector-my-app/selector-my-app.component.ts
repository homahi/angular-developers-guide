import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.my-app[data-component]',
  template:
    '<p>Selectors specified <code>class="my-app"</code> and <code>data-component</code> attribute.</p>'
})
export class SelectorMyAppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
@Component({
  selector: 'selector',
  template: '<div class="my-app" data-component></div>'
})
export class SelectorComponent{}
