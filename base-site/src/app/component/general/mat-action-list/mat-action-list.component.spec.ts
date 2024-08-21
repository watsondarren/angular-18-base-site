import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatActionListComponent } from './mat-action-list.component';

describe('MatActionListComponent', () => {
  let component: MatActionListComponent;
  let fixture: ComponentFixture<MatActionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatActionListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatActionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
