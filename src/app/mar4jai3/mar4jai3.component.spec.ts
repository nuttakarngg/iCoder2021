import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mar4jai3Component } from './mar4jai3.component';

describe('Mar4jai3Component', () => {
  let component: Mar4jai3Component;
  let fixture: ComponentFixture<Mar4jai3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mar4jai3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mar4jai3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
