import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTherapyComponent } from './show-therapy.component';

describe('ShowTherapyComponent', () => {
  let component: ShowTherapyComponent;
  let fixture: ComponentFixture<ShowTherapyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowTherapyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTherapyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
