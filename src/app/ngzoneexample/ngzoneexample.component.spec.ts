import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgzoneexampleComponent } from './ngzoneexample.component';

describe('NgzoneexampleComponent', () => {
  let component: NgzoneexampleComponent;
  let fixture: ComponentFixture<NgzoneexampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgzoneexampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgzoneexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
