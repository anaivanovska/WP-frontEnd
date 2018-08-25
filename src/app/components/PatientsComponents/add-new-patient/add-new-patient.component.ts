// <reference path="../../../../../../../../../node_modules/@angular/common/src/pipes/date_pipe.d.ts"/>
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'; import {PatientManagementService} from '../../../services/patient-management.service';
import {ActivatedRoute} from '@angular/router';
import {Patient} from '../../../model/patient';
import {DatePipe} from '@angular/common';
import {Location} from '@angular/common';

@Component({
  selector: 'app-add-new-patient',
  templateUrl: './add-new-patient.component.html',
  styleUrls: ['./add-new-patient.component.css']
})
export class AddNewPatientComponent implements OnInit {

  newPatientForm: FormGroup;
  insuranceForm: FormGroup;
  genderValues: string[];
  constructor(private patientService: PatientManagementService,
              private formBuilder: FormBuilder,
              private location: Location,
              private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.genderValues = ['MALE', 'FEMALE'];
   this.newPatientForm = this.formBuilder.group({
      patientID: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
     email: ['', [ Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
     phoneNumber: ['', [Validators.required, Validators.pattern('^07[0-9]/[0-9]{3}-[0-9]{3}$')]],
      address: ['', [Validators.required]],
      dateOfBirth: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      embg: ['', [Validators.required]],
      proffesion: ['', [Validators.required]],
      marrigeState: ['', [Validators.required]],
     //HealthInsurance info for patient
      healthLegitimationNumber: ['', [Validators.required]],
      registrationNumber: ['', [Validators.required]],
      activityID: ['', [Validators.required]],
      typeOfHealthProtection: ['', [Validators.required]],
   });

  }

  savePatient() {
    const doctorID = this.activeRoute.snapshot.paramMap.get('userId');
    const formValues = this.newPatientForm.value;
    console.log(formValues.patientID);
    const datePipe = new DatePipe('en-US');
    const dateOfBirth = datePipe.transform(formValues.dateOfBirth, 'dd/MM/yyyy');
    console.log(dateOfBirth);
    this.patientService.savePatient(formValues.patientID, formValues.firstName,
                                    formValues.lastName,
                                    formValues.email, formValues.phoneNumber,
                                    formValues.address, dateOfBirth,
                                    formValues.gender, formValues.embg,
                                    formValues.proffesion, formValues.marrigeState,
                                    doctorID,
                                    //HealthInsuranceInfo
                                     formValues.healthLegitimationNumber,
                                     formValues.registrationNumber,
                                     formValues.activityID,
                                     formValues.typeOfHealthProtection)
      .subscribe((patient: Patient) =>
      this.location.back());
  }
}
