import { Component, OnInit } from '@angular/core';
import {FamilyDoctor} from "../../../model/familyDoctor";
import {FamilyDoctorManagementService} from "../../../services/family-doctor-management.service";

@Component({
  selector: 'app-home-doctor',
  templateUrl: './home-doctor.component.html',
  styleUrls: ['./home-doctor.component.css']
})
export class HomeDoctorComponent implements OnInit {

  familyDoctor: FamilyDoctor;

  constructor(private familyDoctorService: FamilyDoctorManagementService) { }

  ngOnInit() {
    this.familyDoctorService.getFamilyDoctor().subscribe((familyDoctor: FamilyDoctor) => {
      this.familyDoctor = familyDoctor;
    });
  }

}
