import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationStyleComponent } from './animation-style.component';

describe('AnimationStyleComponent', () => {
  let component: AnimationStyleComponent;
  let fixture: ComponentFixture<AnimationStyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimationStyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
