import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatExpansionPanelComponent } from './mat-expansion-panel.component';

describe('MatExpansionPanelComponent', () => {
  let component: MatExpansionPanelComponent;
  let fixture: ComponentFixture<MatExpansionPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatExpansionPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatExpansionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
