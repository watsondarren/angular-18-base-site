import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatFormField10Component } from './mat-form-field10.component';

describe('MatFormField10Component', () => {
  let component: MatFormField10Component;
  let fixture: ComponentFixture<MatFormField10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatFormField10Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatFormField10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
