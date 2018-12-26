import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlinkingDotsComponent } from './blinking-dots.component';

describe('BlinkingDotsComponent', () => {
  let component: BlinkingDotsComponent;
  let fixture: ComponentFixture<BlinkingDotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlinkingDotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlinkingDotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
