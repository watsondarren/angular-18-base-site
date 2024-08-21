import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatToolbar2Component } from './mat-toolbar2.component';

describe('MatToolbar2Component', () => {
  let component: MatToolbar2Component;
  let fixture: ComponentFixture<MatToolbar2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatToolbar2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatToolbar2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
