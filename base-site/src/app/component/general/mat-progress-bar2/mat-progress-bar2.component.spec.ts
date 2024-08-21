import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatProgressBar2Component } from './mat-progress-bar2.component';

describe('MatProgressBar2Component', () => {
  let component: MatProgressBar2Component;
  let fixture: ComponentFixture<MatProgressBar2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatProgressBar2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatProgressBar2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
