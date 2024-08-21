import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatButtonToggleGroup2Component } from './mat-button-toggle-group2.component';

describe('MatButtonToggleGroup2Component', () => {
  let component: MatButtonToggleGroup2Component;
  let fixture: ComponentFixture<MatButtonToggleGroup2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatButtonToggleGroup2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatButtonToggleGroup2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
