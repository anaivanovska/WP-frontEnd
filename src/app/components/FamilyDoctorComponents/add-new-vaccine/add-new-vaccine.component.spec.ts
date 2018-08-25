import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewVaccineComponent } from './add-new-vaccine.component';

describe('AddNewVaccineComponent', () => {
  let component: AddNewVaccineComponent;
  let fixture: ComponentFixture<AddNewVaccineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewVaccineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewVaccineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
