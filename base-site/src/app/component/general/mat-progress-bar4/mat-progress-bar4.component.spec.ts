import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatProgressBar4Component } from './mat-progress-bar4.component';

describe('MatProgressBar4Component', () => {
  let component: MatProgressBar4Component;
  let fixture: ComponentFixture<MatProgressBar4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatProgressBar4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatProgressBar4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
