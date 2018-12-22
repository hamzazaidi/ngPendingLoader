import { TestBed } from '@angular/core/testing';

import { NgPendingService } from './ng-pending.service';

describe('NgPendingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgPendingService = TestBed.get(NgPendingService);
    expect(service).toBeTruthy();
  });
});
