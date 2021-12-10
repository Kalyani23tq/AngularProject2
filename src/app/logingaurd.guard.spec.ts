import { TestBed, async, inject } from '@angular/core/testing';

import { LogingaurdGuard } from './logingaurd.guard';

describe('LogingaurdGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogingaurdGuard]
    });
  });

  it('should ...', inject([LogingaurdGuard], (guard: LogingaurdGuard) => {
    expect(guard).toBeTruthy();
  }));
});
