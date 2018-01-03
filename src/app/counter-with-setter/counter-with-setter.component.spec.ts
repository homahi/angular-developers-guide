import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterWithSetterComponent } from './counter-with-setter.component';

describe('CounterWithSetterComponent', () => {
  let component: CounterWithSetterComponent;
  let fixture: ComponentFixture<CounterWithSetterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterWithSetterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterWithSetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
