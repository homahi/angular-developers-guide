import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonpSampleComponent } from './jsonp-sample.component';

describe('JsonpSampleComponent', () => {
  let component: JsonpSampleComponent;
  let fixture: ComponentFixture<JsonpSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonpSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonpSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
