import { TestBed } from '@angular/core/testing';

import { LibSuva2Service } from './lib-suva2.service';

describe('LibSuva2Service', () => {
  let service: LibSuva2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibSuva2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
