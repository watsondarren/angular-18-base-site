import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatCard2Component } from './mat-card2.component';

describe('MatCard2Component', () => {
  let component: MatCard2Component;
  let fixture: ComponentFixture<MatCard2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatCard2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatCard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
