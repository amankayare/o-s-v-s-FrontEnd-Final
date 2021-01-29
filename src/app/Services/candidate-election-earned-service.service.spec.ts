import { TestBed } from '@angular/core/testing';

import { CandidateElectionEarnedServiceService } from './candidate-election-earned-service.service';

describe('CandidateElectionEarnedServiceService', () => {
  let service: CandidateElectionEarnedServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CandidateElectionEarnedServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
