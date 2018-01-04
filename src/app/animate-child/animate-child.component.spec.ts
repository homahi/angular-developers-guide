import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimateChildComponent } from './animate-child.component';

describe('AnimateChildComponent', () => {
  let component: AnimateChildComponent;
  let fixture: ComponentFixture<AnimateChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimateChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimateChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
