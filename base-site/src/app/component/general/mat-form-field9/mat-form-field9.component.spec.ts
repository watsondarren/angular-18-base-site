import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatFormField9Component } from './mat-form-field9.component';

describe('MatFormField9Component', () => {
  let component: MatFormField9Component;
  let fixture: ComponentFixture<MatFormField9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatFormField9Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatFormField9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
