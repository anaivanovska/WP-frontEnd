import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFamilyDoctorComponent } from './edit-family-doctor.component';

describe('EditFamilyDoctorComponent', () => {
  let component: EditFamilyDoctorComponent;
  let fixture: ComponentFixture<EditFamilyDoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFamilyDoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFamilyDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
