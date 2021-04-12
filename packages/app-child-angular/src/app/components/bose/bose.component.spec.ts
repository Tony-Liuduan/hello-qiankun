/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BoseComponent } from './bose.component';

describe('BoseComponent', () => {
  let component: BoseComponent;
  let fixture: ComponentFixture<BoseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
