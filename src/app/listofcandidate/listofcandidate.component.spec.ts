import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofcandidateComponent } from './listofcandidate.component';

describe('ListofcandidateComponent', () => {
  let component: ListofcandidateComponent;
  let fixture: ComponentFixture<ListofcandidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListofcandidateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListofcandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
