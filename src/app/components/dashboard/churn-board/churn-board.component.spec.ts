import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChurnBoardComponent } from './churn-board.component';

describe('ChurnBoardComponent', () => {
  let component: ChurnBoardComponent;
  let fixture: ComponentFixture<ChurnBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChurnBoardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChurnBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
