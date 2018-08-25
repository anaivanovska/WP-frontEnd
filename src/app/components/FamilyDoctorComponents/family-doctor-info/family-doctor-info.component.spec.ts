import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyDoctorInfoComponent } from './family-doctor-info.component';

describe('FamilyDoctorInfoComponent', () => {
  let component: FamilyDoctorInfoComponent;
  let fixture: ComponentFixture<FamilyDoctorInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilyDoctorInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyDoctorInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
