import { TestBed } from '@angular/core/testing';

import { MyoperfuncService } from './myoperfunc.service';

describe('MyoperfuncService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyoperfuncService = TestBed.get(MyoperfuncService);
    expect(service).toBeTruthy();
  });
});
