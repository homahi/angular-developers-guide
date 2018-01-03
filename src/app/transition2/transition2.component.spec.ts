import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Transition2Component } from './transition2.component';

describe('Transition2Component', () => {
  let component: Transition2Component;
  let fixture: ComponentFixture<Transition2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Transition2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Transition2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
