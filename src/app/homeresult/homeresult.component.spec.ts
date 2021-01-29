import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeresultComponent } from './homeresult.component';

describe('HomeresultComponent', () => {
  let component: HomeresultComponent;
  let fixture: ComponentFixture<HomeresultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeresultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
