import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatStepper2Component } from './mat-stepper2.component';

describe('MatStepper2Component', () => {
  let component: MatStepper2Component;
  let fixture: ComponentFixture<MatStepper2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatStepper2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatStepper2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
