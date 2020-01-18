import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TouchUpComponent } from './touchup.component';

describe('TouchUpComponent', () => {
  let component: TouchUpComponent;
  let fixture: ComponentFixture<TouchUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TouchUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TouchUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
