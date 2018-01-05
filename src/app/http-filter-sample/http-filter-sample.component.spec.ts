import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpFilterSampleComponent } from './http-filter-sample.component';

describe('HttpFilterSampleComponent', () => {
  let component: HttpFilterSampleComponent;
  let fixture: ComponentFixture<HttpFilterSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpFilterSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpFilterSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
