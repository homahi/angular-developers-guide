import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseExistingDiComponent } from './use-existing-di.component';

describe('UseExistingDiComponent', () => {
  let component: UseExistingDiComponent;
  let fixture: ComponentFixture<UseExistingDiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseExistingDiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseExistingDiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
