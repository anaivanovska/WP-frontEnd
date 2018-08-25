import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FamilyDoctorManagementService} from "../../../services/family-doctor-management.service";
import {ActivatedRoute} from "@angular/router";
import {DatePipe, Location} from "@angular/common";
import {PatientManagementService} from "../../../services/patient-management.service";
import {Vaccine} from "../../../model/vaccine";

@Component({
  selector: 'app-add-new-vaccine',
  templateUrl: './add-new-vaccine.component.html',
  styleUrls: ['./add-new-vaccine.component.css']
})
export class AddNewVaccineComponent implements OnInit {

  newVaccineForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private patientService: PatientManagementService,
              private activeRoute: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    this.newVaccineForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      dateOfReceipt: ['', [Validators.required]]
    });
  }


  save(){
    const userId = this.activeRoute.snapshot.paramMap.get('patientId');
    const formValues = this.newVaccineForm.value;

    this.patientService.addVaccineToPatient(userId, formValues.name, formValues.dateOfReceipt).subscribe((vaccine: Vaccine) => {
      this.location.back();
    },
      (error: any) => {
        alert('Vaccine is not saved in database, try again');
      });

  }


  goBack(){
    this.location.back();
  }
}
