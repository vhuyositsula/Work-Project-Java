import { TestBed } from '@angular/core/testing';

import { RemoveProductService } from './remove-product.service';

describe('RemoveProductService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RemoveProductService = TestBed.get(RemoveProductService);
    expect(service).toBeTruthy();
  });
});
