import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotecandidateComponent } from './votecandidate.component';

describe('VotecandidateComponent', () => {
  let component: VotecandidateComponent;
  let fixture: ComponentFixture<VotecandidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VotecandidateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VotecandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
