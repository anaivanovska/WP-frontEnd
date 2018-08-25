import { Component, OnInit } from '@angular/core';
import {FamilyDoctorManagementService} from '../../../services/family-doctor-management.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DatePipe} from '@angular/common';
import {Router} from '@angular/router';
import {AlertService} from '../../../services/alert.service';

@Component({
  selector: 'app-add-new-family-doctor',
  templateUrl: './add-new-family-doctor.component.html',
  styleUrls: ['./add-new-family-doctor.component.css']
})
export class AddNewFamilyDoctorComponent implements OnInit {

  newDoctorForm: FormGroup;
  familyDoctorsID: string[] = [];
  constructor(private familyDoctorService: FamilyDoctorManagementService,
              private formBuilder: FormBuilder, private router: Router, private alertService: AlertService) { }


  ngOnInit() {
    this.getAllFamilyDoctorsID();
    this.newDoctorForm = this.formBuilder.group({
      userId: ['', [ Validators.required]],
      firstName: ['', [ Validators.required]],
      lastName: ['', [ Validators.required]],
      email: ['', [ Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^07[0-9]/[0-9]{3}-[0-9]{3}$')]],
      address: ['', [Validators.required]],
      dateOfBirth: ['', [Validators.required]],
      agreement_with_FZO: ['', [Validators.required]],
      speciality: ['', [Validators.required]],
      workTime: ['', [Validators.required]],
      deputyFamilyDoctor: ['', [Validators.required]]
    });

  }

  saveChanges() {
    const formData = this.newDoctorForm.value;
    console.log(formData);
    console.log(formData.agreement_with_FZO);
    let agreement;
    if (formData.agreement_with_FZO === 'true') {
      agreement = true;
    } else {
      agreement = false;
    }
    const datePipe = new DatePipe('en-US');
    const dateOfBirth = datePipe.transform(formData.dateOfBirth, 'dd/MM/yyyy');
    console.log(dateOfBirth);
    this.familyDoctorService.saveFamilyDoctor(
      formData.userId,
      formData.firstName,
      formData.lastName,
      dateOfBirth,
      formData.email,
      formData.phoneNumber,
      formData.address,
      agreement,
      formData.speciality,
      formData.workTime,
      formData.deputyFamilyDoctor
    ).subscribe((familyDoctor) => {
        console.log('Successfully added');
        // this.alertService.success('Successfully added');
        this.router.navigate(['admin/home']);
      },
      (error: any) => {
        // this.alertService.error('Something went wrong... Please try again');
        alert('Something went wrong... Please try again :)');
      });

  }


  getAllFamilyDoctorsID() {

    this.familyDoctorService.getAllFamilyDoctorsID().subscribe((doctorsID: string[]) => this.familyDoctorsID = doctorsID);

  }

}
