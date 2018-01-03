import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostDecoratorComponent } from './host-decorator.component';

describe('HostDecoratorComponent', () => {
  let component: HostDecoratorComponent;
  let fixture: ComponentFixture<HostDecoratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostDecoratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
