import {Component, OnInit} from '@angular/core';
import {PatientManagementService} from '../../../services/patient-management.service';
import {Router} from '@angular/router';
import {Patient} from '../../../model/patient';
import {FormBuilder, FormGroup} from '@angular/forms';
import {marriageValues} from '../../../model/data';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css']
})
export class EditPatientComponent implements OnInit {

  editPatientForm: FormGroup;
  patient: Patient;
  marriageStates: string[];

  constructor(private patientService: PatientManagementService,
              private route: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.marriageStates = marriageValues;
    this.patientService.getPatient().subscribe((patient: Patient) => {
        this.patient = patient;
        this.editPatientForm = this.formBuilder.group({
          firstName: [this.patient.firstName],
          lastName:  [this.patient.lastName],
          email: [this.patient.email],
          phoneNumber: [this.patient.phoneNumber],
          address: [this.patient.address],
          dateOfBirth: [this.patient.dateOfBirth],
          profession: [this.patient.profession],
          marriageState : [this.patient.marriageState],
        });
    });
   }

  updatePatient() {
    const formValues = this.editPatientForm.value;
    this.patientService.updatePatient(this.patient.userId, formValues.firstName,
                                      formValues.lastName, formValues.email,
                                      formValues.phoneNumber, formValues.address,
                                      formValues.dateOfBirth, formValues.profession,
                                      formValues.marriageState).subscribe((patient: Patient) => {
                                        this.route.navigate(['/patient/' + this.patient.userId + '/myProfile']);
                                        },
                                      (error: any) => {
                                         alert('Something went wrong ...');
                                      });
  }

  goBack() {
    this.route.navigate(['/patient/' + this.patient.userId + '/myProfile']);
  }


}
