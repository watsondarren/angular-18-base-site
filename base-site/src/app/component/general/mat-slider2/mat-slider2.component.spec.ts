import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatSlider2Component } from './mat-slider2.component';

describe('MatSlider2Component', () => {
  let component: MatSlider2Component;
  let fixture: ComponentFixture<MatSlider2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatSlider2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatSlider2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
