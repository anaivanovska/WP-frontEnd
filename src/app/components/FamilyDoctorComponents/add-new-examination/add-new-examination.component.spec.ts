import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewExaminationComponent } from './add-new-examination.component';

describe('AddNewExaminationComponent', () => {
  let component: AddNewExaminationComponent;
  let fixture: ComponentFixture<AddNewExaminationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewExaminationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewExaminationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
