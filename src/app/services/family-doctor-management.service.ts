///<reference path="../../../node_modules/rxjs/operators/catchError.d.ts"/>
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {FamilyDoctor} from '../model/familyDoctor';
import {catchError} from 'rxjs/operators';
import {isBoolean} from 'util';
import {Patient} from '../model/patient';

@Injectable()
export class FamilyDoctorManagementService {

  constructor(private http: HttpClient) { }

  getFamilyDoctor(): Observable<FamilyDoctor> {
      return this.http.get<FamilyDoctor>('http://localhost:8080/api/doctor/get');
  }

  updateFamilyDoctor(userId: string,
                     firstName: string,
                     lastName: string,
                     email: string,
                     phoneNumber: string,
                     address: string,
                     agreement_with_FZO: boolean,
                     specialty: string,
                     workTime: string,
                     deputyFamilyDoctorID: string): Observable<FamilyDoctor> {
    const params = new FormData();
    console.log(userId);
    console.log(firstName);
    console.log(lastName);
    console.log(email);


    params.set('userId', userId);
    params.set('firstName', firstName);
    params.set('lastName', lastName);
    params.set('email', email);
    params.set('phoneNumber', phoneNumber);
    params.set('address', address);
    params.set('speciality', specialty);
    params.set('workTime', workTime);
    params.set('agreement_with_FZO', JSON.stringify(agreement_with_FZO));
    params.set('deputyFamilyDoctorID', deputyFamilyDoctorID);
    return this.http.post<FamilyDoctor>('http://localhost:8080/api/doctor/update', params);
  }

  saveFamilyDoctor(userId: string,
                  firstName: string,
                  lastName: string,
                  dateOfBirth: string,
                  email: string,
                  phoneNumber: string,
                  address: string,
                  agreement_with_FZO: boolean,
                  specialty: string,
                  workTime: string,
                  deputyFamilyDoctorID: string): Observable<FamilyDoctor> {

    const params = new FormData();
    params.set('userId', userId);
    params.set('firstName', firstName);
    params.set('lastName', lastName);
    params.set('email', email);
    params.set('phoneNumber', phoneNumber);
    params.set('address', address);
    params.set('dateOfBirth', dateOfBirth);
    params.set('agreement_with_FZO', JSON.stringify(agreement_with_FZO));
    params.set('speciality', specialty);
    params.set('workTime', workTime);
    params.set('deputyFamilyDoctorID', deputyFamilyDoctorID);

    return this.http.post<FamilyDoctor>('http://localhost:8080/api/doctor/addNewFamilyDoctor', params);

  }

  getAllPatients(): Observable<any> {
      return this.http.get<any>('http://localhost:8080/api/doctor/patients');
  }


  getAllFamilyDoctorsID(): Observable<string[]> {

    return this.http.get<string[]>('http://localhost:8080/api/doctor/getAll');

  }
}
