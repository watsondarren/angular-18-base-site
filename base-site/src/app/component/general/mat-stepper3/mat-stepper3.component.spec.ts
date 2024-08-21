import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatStepper3Component } from './mat-stepper3.component';

describe('MatStepper3Component', () => {
  let component: MatStepper3Component;
  let fixture: ComponentFixture<MatStepper3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatStepper3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatStepper3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
