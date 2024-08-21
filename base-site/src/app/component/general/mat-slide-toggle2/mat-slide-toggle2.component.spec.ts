import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatSlideToggle2Component } from './mat-slide-toggle2.component';

describe('MatSlideToggle2Component', () => {
  let component: MatSlideToggle2Component;
  let fixture: ComponentFixture<MatSlideToggle2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatSlideToggle2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatSlideToggle2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
