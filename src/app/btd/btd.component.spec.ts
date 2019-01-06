import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtdComponent } from './btd.component';

describe('BtdComponent', () => {
  let component: BtdComponent;
  let fixture: ComponentFixture<BtdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
