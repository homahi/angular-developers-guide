import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleNumberPipeComponent } from './sample-number-pipe.component';

describe('SampleNumberPipeComponent', () => {
  let component: SampleNumberPipeComponent;
  let fixture: ComponentFixture<SampleNumberPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleNumberPipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleNumberPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
