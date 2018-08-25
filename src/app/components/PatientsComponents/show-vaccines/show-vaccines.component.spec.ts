import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowVaccinesComponent } from './show-vaccines.component';

describe('ShowVaccinesComponent', () => {
  let component: ShowVaccinesComponent;
  let fixture: ComponentFixture<ShowVaccinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowVaccinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowVaccinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
