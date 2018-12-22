import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgPendingComponent } from './ng-pending.component';

describe('NgPendingComponent', () => {
  let component: NgPendingComponent;
  let fixture: ComponentFixture<NgPendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgPendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
