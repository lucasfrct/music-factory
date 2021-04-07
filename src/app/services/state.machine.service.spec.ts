import { TestBed } from '@angular/core/testing';

import { State.MachineService } from './state.machine.service';

describe('State.MachineService', () => {
  let service: State.MachineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(State.MachineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
