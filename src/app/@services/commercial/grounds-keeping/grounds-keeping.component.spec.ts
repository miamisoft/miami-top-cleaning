import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroundsKeepingComponent } from './grounds-keeping.component';

describe('GroundsKeepingComponent', () => {
  let component: GroundsKeepingComponent;
  let fixture: ComponentFixture<GroundsKeepingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroundsKeepingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroundsKeepingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
