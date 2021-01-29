import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagecandidateComponent } from './managecandidate.component';

describe('ManagecandidateComponent', () => {
  let component: ManagecandidateComponent;
  let fixture: ComponentFixture<ManagecandidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagecandidateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagecandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
