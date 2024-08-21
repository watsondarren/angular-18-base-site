import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatFormField8Component } from './mat-form-field8.component';

describe('MatFormField8Component', () => {
  let component: MatFormField8Component;
  let fixture: ComponentFixture<MatFormField8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatFormField8Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatFormField8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
