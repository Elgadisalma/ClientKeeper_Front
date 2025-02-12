import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientApprouveComponent } from './client-approuve.component';

describe('ClientApprouveComponent', () => {
  let component: ClientApprouveComponent;
  let fixture: ComponentFixture<ClientApprouveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientApprouveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientApprouveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
