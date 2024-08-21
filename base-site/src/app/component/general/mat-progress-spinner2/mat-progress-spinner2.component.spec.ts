import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatProgressSpinner2Component } from './mat-progress-spinner2.component';

describe('MatProgressSpinner2Component', () => {
  let component: MatProgressSpinner2Component;
  let fixture: ComponentFixture<MatProgressSpinner2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatProgressSpinner2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatProgressSpinner2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
