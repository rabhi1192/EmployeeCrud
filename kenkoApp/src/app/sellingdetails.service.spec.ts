import { TestBed, inject } from '@angular/core/testing';

import { Sellingdetails } from './sellingdetails.service';

describe('Sellingdetails', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Sellingdetails]
    });
  });

  it('should be created', inject([Sellingdetails], (service: Sellingdetails) => {
    expect(service).toBeTruthy();
  }));
});
