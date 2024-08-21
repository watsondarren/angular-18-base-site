import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatFormField16Component } from './mat-form-field16.component';

describe('MatFormField16Component', () => {
  let component: MatFormField16Component;
  let fixture: ComponentFixture<MatFormField16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatFormField16Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatFormField16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
