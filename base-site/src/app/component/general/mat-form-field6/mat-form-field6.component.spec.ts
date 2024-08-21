import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatFormField6Component } from './mat-form-field6.component';

describe('MatFormField6Component', () => {
  let component: MatFormField6Component;
  let fixture: ComponentFixture<MatFormField6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatFormField6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatFormField6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
