import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JanitorialComponent } from './janitorial.component';

describe('JanitorialComponent', () => {
  let component: JanitorialComponent;
  let fixture: ComponentFixture<JanitorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JanitorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JanitorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
