import { AfterContentInit, AfterViewInit, ContentChild, ContentChildren, ViewChild, ViewChildren, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-child',
  template: '<p>This is ViewChild'
})
export class QueriesViewChildComponent { }

@Component({
  selector: 'app-content-child',
  template: '<p>This is ContentChild'
})
export class QueriesContentChildComponent { }

@Component({
  selector: 'app-queries-child',
  template: `
    <app-view-child></app-view-child>
    <app-view-child></app-view-child>
    <ng-content></ng-content>
  `,
  queries: {
    viewChild: new ViewChild(QueriesViewChildComponent),
    viewChildren: new ViewChildren(QueriesViewChildComponent),
    contentChild: new ContentChild(QueriesContentChildComponent),
    contentChildren: new ContentChildren(QueriesContentChildComponent)
  }
})
export class QueriesChildComponent implements AfterContentInit, AfterViewInit {
  viewChild: ViewChild;
  viewChildren: ViewChildren;
  contentChild: ContentChild;
  contentChildren: ContentChildren;

  ngAfterContentInit() {
    console.log(`Query content child: ${this.contentChild}`);
    console.log(`Query content children: ${this.contentChildren}`);
  }
  ngAfterViewInit() {
    console.log(`Query view child: ${this.viewChild}`);
    console.log(`Query view children: ${this.viewChildren}`);
  }
}

@Component({
  selector: 'app-queries',
  templateUrl: './queries.component.html',
  styleUrls: ['./queries.component.css']
})
export class QueriesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
