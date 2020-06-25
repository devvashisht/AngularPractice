import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChagnedetectrefComponent } from './chagnedetectref.component';

describe('ChagnedetectrefComponent', () => {
  let component: ChagnedetectrefComponent;
  let fixture: ComponentFixture<ChagnedetectrefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChagnedetectrefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChagnedetectrefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
