import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatRadioButton2Component } from './mat-radio-button2.component';

describe('MatRadioButton2Component', () => {
  let component: MatRadioButton2Component;
  let fixture: ComponentFixture<MatRadioButton2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatRadioButton2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatRadioButton2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
