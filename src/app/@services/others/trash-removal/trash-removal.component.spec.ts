import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrashRemovalComponent } from './trash-removal.component';

describe('TrashRemovalComponent', () => {
  let component: TrashRemovalComponent;
  let fixture: ComponentFixture<TrashRemovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrashRemovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrashRemovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
