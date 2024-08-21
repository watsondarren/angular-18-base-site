import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatFormField13Component } from './mat-form-field13.component';

describe('MatFormField13Component', () => {
  let component: MatFormField13Component;
  let fixture: ComponentFixture<MatFormField13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatFormField13Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatFormField13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
