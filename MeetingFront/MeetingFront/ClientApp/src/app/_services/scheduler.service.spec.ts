/* tslint:disable:no-unused-variable */

import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { SchedulerService } from './scheduler.service';

describe('Service: SchedulerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SchedulerService]
    });
  });

  it('should ...', inject([SchedulerService], (service: SchedulerService) => {
    expect(service).toBeTruthy();
  }));
});
