import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleDiComponent } from './simple-di.component';

describe('SimpleDiComponent', () => {
  let component: SimpleDiComponent;
  let fixture: ComponentFixture<SimpleDiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleDiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleDiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
