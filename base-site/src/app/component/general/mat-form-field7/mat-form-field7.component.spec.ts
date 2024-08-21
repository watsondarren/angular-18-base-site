import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatFormField7Component } from './mat-form-field7.component';

describe('MatFormField7Component', () => {
  let component: MatFormField7Component;
  let fixture: ComponentFixture<MatFormField7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatFormField7Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatFormField7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
