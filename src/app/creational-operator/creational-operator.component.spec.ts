import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationalOperatorComponent } from './creational-operator.component';

describe('CreationalOperatorComponent', () => {
  let component: CreationalOperatorComponent;
  let fixture: ComponentFixture<CreationalOperatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreationalOperatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationalOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
