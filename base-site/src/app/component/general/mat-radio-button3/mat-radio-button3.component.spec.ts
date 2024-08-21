import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatRadioButton3Component } from './mat-radio-button3.component';

describe('MatRadioButton3Component', () => {
  let component: MatRadioButton3Component;
  let fixture: ComponentFixture<MatRadioButton3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatRadioButton3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatRadioButton3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
