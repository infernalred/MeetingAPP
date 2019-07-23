/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SchedulerServiceService } from './schedulerService.service';

describe('Service: SchedulerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SchedulerServiceService]
    });
  });

  it('should ...', inject([SchedulerServiceService], (service: SchedulerServiceService) => {
    expect(service).toBeTruthy();
  }));
});
