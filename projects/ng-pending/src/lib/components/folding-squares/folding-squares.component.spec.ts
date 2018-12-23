import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoldingSquaresComponent } from './folding-squares.component';

describe('FoldingSquaresComponent', () => {
  let component: FoldingSquaresComponent;
  let fixture: ComponentFixture<FoldingSquaresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoldingSquaresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoldingSquaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
