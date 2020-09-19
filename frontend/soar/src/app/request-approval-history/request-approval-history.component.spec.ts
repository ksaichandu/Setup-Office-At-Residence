import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestApprovalHistoryComponent } from './request-approval-history.component';

describe('RequestApprovalHistoryComponent', () => {
  let component: RequestApprovalHistoryComponent;
  let fixture: ComponentFixture<RequestApprovalHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestApprovalHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestApprovalHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
