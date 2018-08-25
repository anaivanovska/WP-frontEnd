import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Patient} from '../../../model/patient';
import {ActivatedRoute, Router} from '@angular/router';
import {PatientManagementService} from '../../../services/patient-management.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchField: FormControl;
  patients: Patient[];
  patientsFound: boolean;

  constructor(private patientService: PatientManagementService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.patientsFound = false;
    this.searchField = new FormControl();
  }

  search() {
    console.log(this.searchField.value);
    const familyDoctorID = this.activatedRoute.snapshot.paramMap.get('userId');
    this.patientService.searchPatients(this.searchField.value, familyDoctorID).subscribe((patients: Patient[]) =>{
        this.patients = patients;
        this.patientsFound = true;
      },
      (error: any) => {
        console.log(JSON.stringify(error));
        // alert('Something went wrong in search component');
      });
  }

}

