import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalCleaningComponent } from './final.component';

describe('FinalCleaningComponent', () => {
  let component: FinalCleaningComponent;
  let fixture: ComponentFixture<FinalCleaningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalCleaningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalCleaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
