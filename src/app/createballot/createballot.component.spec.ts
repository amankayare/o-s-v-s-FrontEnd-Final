import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateballotComponent } from './createballot.component';

describe('CreateballotComponent', () => {
  let component: CreateballotComponent;
  let fixture: ComponentFixture<CreateballotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateballotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateballotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
