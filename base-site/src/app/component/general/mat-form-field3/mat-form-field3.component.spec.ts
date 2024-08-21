import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatFormField3Component } from './mat-form-field3.component';

describe('MatFormField3Component', () => {
  let component: MatFormField3Component;
  let fixture: ComponentFixture<MatFormField3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatFormField3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatFormField3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
