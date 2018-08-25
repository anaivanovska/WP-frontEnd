import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSelectedPatientProfileComponent } from './show-selected-patient-profile.component';

describe('ShowSelectedPatientProfileComponent', () => {
  let component: ShowSelectedPatientProfileComponent;
  let fixture: ComponentFixture<ShowSelectedPatientProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowSelectedPatientProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSelectedPatientProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
