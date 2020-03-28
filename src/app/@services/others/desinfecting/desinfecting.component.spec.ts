import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesinfectingComponent } from './desinfecting.component';

describe('DesinfectingComponent', () => {
  let component: DesinfectingComponent;
  let fixture: ComponentFixture<DesinfectingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesinfectingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesinfectingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
