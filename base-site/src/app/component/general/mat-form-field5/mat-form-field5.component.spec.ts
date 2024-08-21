import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatFormField5Component } from './mat-form-field5.component';

describe('MatFormField5Component', () => {
  let component: MatFormField5Component;
  let fixture: ComponentFixture<MatFormField5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatFormField5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatFormField5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
