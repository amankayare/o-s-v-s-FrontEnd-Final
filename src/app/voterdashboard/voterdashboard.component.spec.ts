import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoterdashboardComponent } from './voterdashboard.component';

describe('VoterdashboardComponent', () => {
  let component: VoterdashboardComponent;
  let fixture: ComponentFixture<VoterdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoterdashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoterdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
