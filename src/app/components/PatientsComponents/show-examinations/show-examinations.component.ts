import { Component, OnInit } from '@angular/core';
import {HealthExamination} from '../../../model/healthExamination';
import {PatientManagementService} from '../../../services/patient-management.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from "@angular/common";
import {TokenStorage} from "../../../tokenStorage";

@Component({
  selector: 'app-show-examinations',
  templateUrl: './show-examinations.component.html',
  styleUrls: ['./show-examinations.component.css']
})
export class ShowExaminationsComponent implements OnInit {
  healthExaminations: HealthExamination[];
  role: string;
  constructor(private location: Location,
              private patientService: PatientManagementService,
              private tokenStorage: TokenStorage,
              private activeRoute: ActivatedRoute,
              private route: Router) { }

  ngOnInit() {
      this.role = this.tokenStorage.getRole();
      let userId;
      if (this.role === 'patient') {
        userId = this.activeRoute.snapshot.paramMap.get('userId');
      } else if (this.role === 'familyDoctor') {
        userId = this.activeRoute.snapshot.paramMap.get('patientId');
      }

    this.patientService.getPatientExaminations(userId).subscribe(healthExamination => {
      this.healthExaminations = healthExamination['content'];
    });
  }

  goBack() {
    this.location.back();
  }

  showTherapy(dateOfExamination: string) {
    const userId = this.activeRoute.snapshot.paramMap.get('userId');
    if (this.role === 'patient') {
      this.route.navigate(['/patient/' + userId + '/examinations/' + dateOfExamination + '/therapy']);
    } else if (this.role === 'familyDoctor'){
      const patientId = this.activeRoute.snapshot.paramMap.get('patientId');
      this.route.navigate(['/familyDoctor/' + userId + '/patients/' + patientId + '/examinations/' + dateOfExamination + '/therapy']);

    }
  }

}
