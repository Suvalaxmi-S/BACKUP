import { TestBed } from '@angular/core/testing';

import { LibSuva3Service } from './lib-suva3.service';

describe('LibSuva3Service', () => {
  let service: LibSuva3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibSuva3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
