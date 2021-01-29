import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateorganisationComponent } from './candidateorganisation.component';

describe('CandidateorganisationComponent', () => {
  let component: CandidateorganisationComponent;
  let fixture: ComponentFixture<CandidateorganisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidateorganisationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateorganisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
