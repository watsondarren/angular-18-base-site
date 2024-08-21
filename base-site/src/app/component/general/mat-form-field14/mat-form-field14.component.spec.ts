import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatFormField14Component } from './mat-form-field14.component';

describe('MatFormField14Component', () => {
  let component: MatFormField14Component;
  let fixture: ComponentFixture<MatFormField14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatFormField14Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatFormField14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
