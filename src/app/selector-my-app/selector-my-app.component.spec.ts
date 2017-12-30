import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorMyAppComponent } from './selector-my-app.component';

describe('SelectorMyAppComponent', () => {
  let component: SelectorMyAppComponent;
  let fixture: ComponentFixture<SelectorMyAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectorMyAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorMyAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
