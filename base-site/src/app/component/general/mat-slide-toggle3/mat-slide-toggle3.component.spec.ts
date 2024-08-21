import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatSlideToggle3Component } from './mat-slide-toggle3.component';

describe('MatSlideToggle3Component', () => {
  let component: MatSlideToggle3Component;
  let fixture: ComponentFixture<MatSlideToggle3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatSlideToggle3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatSlideToggle3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
