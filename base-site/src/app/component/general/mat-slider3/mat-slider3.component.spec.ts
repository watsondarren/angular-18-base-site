import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatSlider3Component } from './mat-slider3.component';

describe('MatSlider3Component', () => {
  let component: MatSlider3Component;
  let fixture: ComponentFixture<MatSlider3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatSlider3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatSlider3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
