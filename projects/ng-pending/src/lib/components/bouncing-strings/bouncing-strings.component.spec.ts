import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BouncingStringsComponent } from './bouncing-strings.component';

describe('BouncingStringsComponent', () => {
  let component: BouncingStringsComponent;
  let fixture: ComponentFixture<BouncingStringsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BouncingStringsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BouncingStringsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
