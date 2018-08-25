import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewFamilyDoctorComponent } from './add-new-family-doctor.component';

describe('AddNewFamilyDoctorComponent', () => {
  let component: AddNewFamilyDoctorComponent;
  let fixture: ComponentFixture<AddNewFamilyDoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewFamilyDoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewFamilyDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
