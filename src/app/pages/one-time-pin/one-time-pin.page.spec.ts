import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneTimePinPage } from './one-time-pin.page';

describe('OneTimePinPage', () => {
  let component: OneTimePinPage;
  let fixture: ComponentFixture<OneTimePinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneTimePinPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneTimePinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
