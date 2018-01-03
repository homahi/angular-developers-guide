import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Transition3Component } from './transition3.component';

describe('Transition3Component', () => {
  let component: Transition3Component;
  let fixture: ComponentFixture<Transition3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Transition3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Transition3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
