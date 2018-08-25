import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDoctorComponent } from './menu-doctor.component';

describe('MenuDoctorComponent', () => {
  let component: MenuDoctorComponent;
  let fixture: ComponentFixture<MenuDoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuDoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
