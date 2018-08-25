import {Component, Input, OnInit} from '@angular/core';
import {FamilyDoctor} from '../../../model/familyDoctor';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FamilyDoctorManagementService} from '../../../services/family-doctor-management.service';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-edit-family-doctor',
  templateUrl: './edit-family-doctor.component.html',
  styleUrls: ['./edit-family-doctor.component.css']
})
export class EditFamilyDoctorComponent implements OnInit {
  familyDoctor: FamilyDoctor;
  editDoctorInfoForm: FormGroup;

  constructor(private familyDoctorService: FamilyDoctorManagementService,
              private formBuilder: FormBuilder,
              private location: Location) { }

  ngOnInit() {
    this.getFamilyDoctor();
  }

  getFamilyDoctor() {
    this.familyDoctorService.getFamilyDoctor().subscribe((familyDoctor: FamilyDoctor) => {
        this.familyDoctor = familyDoctor;
        console.log('Vo edit familyDoctor');
        console.log(this.familyDoctor);
        this.editDoctorInfoForm = this.formBuilder.group({
          firstName: [this.familyDoctor.firstName],
          lastName: [this.familyDoctor.lastName],
          email: [this.familyDoctor.email],
          phoneNumber: [this.familyDoctor.phoneNumber],
          address: [this.familyDoctor.address],
          agreement_with_FZO: [this.familyDoctor.agreement_with_FZO],
          specialty: [this.familyDoctor.speciality],
          workTime: [this.familyDoctor.workTime],
          deputyFamilyDoctorID: [this.familyDoctor.deputyFamilyDoctor.userId]
        });
      },
      (error: any) => {
        console.log('Not found');
      });
  }

  saveChanges() {
    const formData = this.editDoctorInfoForm.value;
    console.log(formData);
    this.familyDoctorService.updateFamilyDoctor(this.familyDoctor.userId,
                                                formData.firstName,
                                                formData.lastName,
                                                formData.email,
                                                formData.phoneNumber,
                                                formData.address,
                                                formData.agreement_with_FZO,
                                                formData.specialty,
                                                formData.workTime,
                                                formData.deputyFamilyDoctorID
                                                ).subscribe((familyDoctor) => {
                                                     this.location.back();
                                                     },
                                                  (error: any) => {
                                                     alert('Something went wrong... Please try again :)');
                                                  });

  }

  goBack() {
    this.location.back();
  }

}
