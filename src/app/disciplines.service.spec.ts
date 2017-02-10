/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DisciplinesService } from './disciplines.service';

describe('DisciplinesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DisciplinesService]
    });
  });

  it('should ...', inject([DisciplinesService], (service: DisciplinesService) => {
    expect(service).toBeTruthy();
  }));
});
