import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OmeqmComponent } from './omeqm.component';

describe('OmeqmComponent', () => {
  let component: OmeqmComponent;
  let fixture: ComponentFixture<OmeqmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OmeqmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OmeqmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
