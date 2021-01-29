import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagevoterComponent } from './managevoter.component';

describe('ManagevoterComponent', () => {
  let component: ManagevoterComponent;
  let fixture: ComponentFixture<ManagevoterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagevoterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagevoterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
