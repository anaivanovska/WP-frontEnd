import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowExaminationsComponent } from './show-examinations.component';

describe('ShowExaminationsComponent', () => {
  let component: ShowExaminationsComponent;
  let fixture: ComponentFixture<ShowExaminationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowExaminationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowExaminationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
