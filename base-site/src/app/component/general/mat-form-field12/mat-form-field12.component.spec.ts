import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatFormField12Component } from './mat-form-field12.component';

describe('MatFormField12Component', () => {
  let component: MatFormField12Component;
  let fixture: ComponentFixture<MatFormField12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatFormField12Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatFormField12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
