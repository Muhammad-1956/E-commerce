import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { controlsGuard } from './controls.guard';

describe('controlsGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => controlsGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
