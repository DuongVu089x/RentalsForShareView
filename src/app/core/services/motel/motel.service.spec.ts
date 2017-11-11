import { TestBed, inject } from '@angular/core/testing';

import { MotelService } from './motel.service';

describe('MotelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MotelService]
    });
  });

  it('should be created', inject([MotelService], (service: MotelService) => {
    expect(service).toBeTruthy();
  }));
});
