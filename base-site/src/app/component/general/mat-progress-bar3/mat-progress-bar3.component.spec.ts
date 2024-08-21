import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatProgressBar3Component } from './mat-progress-bar3.component';

describe('MatProgressBar3Component', () => {
  let component: MatProgressBar3Component;
  let fixture: ComponentFixture<MatProgressBar3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatProgressBar3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatProgressBar3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
