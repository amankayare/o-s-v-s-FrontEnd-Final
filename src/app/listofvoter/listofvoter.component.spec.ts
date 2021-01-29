import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofvoterComponent } from './listofvoter.component';

describe('ListofvoterComponent', () => {
  let component: ListofvoterComponent;
  let fixture: ComponentFixture<ListofvoterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListofvoterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListofvoterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
