import { TestBed } from '@angular/core/testing';

import { IonosApiService } from './ionos-api.service';

describe('IonosApiService', () => {
  let service: IonosApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IonosApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
