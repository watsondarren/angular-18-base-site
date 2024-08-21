import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatSpinner2Component } from './mat-spinner2.component';

describe('MatSpinner2Component', () => {
  let component: MatSpinner2Component;
  let fixture: ComponentFixture<MatSpinner2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatSpinner2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatSpinner2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
