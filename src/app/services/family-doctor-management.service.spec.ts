import { TestBed, inject } from '@angular/core/testing';

import { FamilyDoctorManagementService } from './family-doctor-management.service';

describe('FamilyDoctorManagementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FamilyDoctorManagementService]
    });
  });

  it('should be created', inject([FamilyDoctorManagementService], (service: FamilyDoctorManagementService) => {
    expect(service).toBeTruthy();
  }));
});
