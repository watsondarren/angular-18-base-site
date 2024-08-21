import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatSelectionList2Component } from './mat-selection-list2.component';

describe('MatSelectionList2Component', () => {
  let component: MatSelectionList2Component;
  let fixture: ComponentFixture<MatSelectionList2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatSelectionList2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatSelectionList2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
