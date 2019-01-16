import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DustRemovalComponent } from './dust-removal.component';

describe('DustRemovalComponent', () => {
  let component: DustRemovalComponent;
  let fixture: ComponentFixture<DustRemovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DustRemovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DustRemovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
