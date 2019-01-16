import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighRiseWindowComponent } from './high-rise-window.component';

describe('HighRiseWindowComponent', () => {
  let component: HighRiseWindowComponent;
  let fixture: ComponentFixture<HighRiseWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighRiseWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighRiseWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
