import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatRadioButton4Component } from './mat-radio-button4.component';

describe('MatRadioButton4Component', () => {
  let component: MatRadioButton4Component;
  let fixture: ComponentFixture<MatRadioButton4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatRadioButton4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatRadioButton4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
