import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Patient} from '../model/patient';
import {HealthExamination} from '../model/healthExamination';
import {Vaccine} from '../model/vaccine';
import {Medicine} from '../model/medicine';

@Injectable()
export class PatientManagementService {

  constructor(private http: HttpClient) { }

  getPatient(): Observable<Patient> {
    return this.http.get<Patient>('http://localhost:8080/api/patient/getPatient');
  }

  savePatient(patientID: string, firstName: string, lastName: string,
              email: string, phoneNumber: string,
              address: string, dateOfBirth: string, gender: string,
              embg: string, proffesion: string, marrigeState: string, doctorID: string,
              healthLegitimationNumber: string, registrationNumber: string,
              activityID: string, typeOfHealthProtection: string): Observable<Patient> {
    const patientInfo = new FormData();
    patientInfo.set('userId', patientID);
    patientInfo.set('firstName', firstName);
    patientInfo.set('lastName', lastName);
    patientInfo.set('email', email);
    patientInfo.set('phoneNumber', phoneNumber);
    patientInfo.set('address', address);
    patientInfo.set('dateOfBirth', dateOfBirth);
    patientInfo.set('gender', gender);
    patientInfo.set('embg', embg);
    patientInfo.set('profession', proffesion);
    patientInfo.set('marriageState', marrigeState);
    patientInfo.set('familyDoctorID', doctorID);
    patientInfo.set('healthLegitimationNumber', healthLegitimationNumber);
    patientInfo.set('registrationNumber', registrationNumber);
    patientInfo.set('activityID', activityID);
    patientInfo.set('typeOfHealthProtection', typeOfHealthProtection);


    return this.http.post<Patient>('http://localhost:8080/api/patient/addNewPatient', patientInfo);
  }


  getPatientExaminations(userId: string): Observable<any> {
    return this.http.get<any>('http://localhost:8080/api/patient/' + userId + '/examinations');
  }

  getPatientVaccines(userId: string): Observable<Vaccine[]> {
    return this.http.get<Vaccine[]>('http://localhost:8080/api/patient/' + userId + '/vaccines');
  }

  updatePatient(userId: string, firstName: string,
                lastName: string, email: string,
                phoneNumber: string, address: string,
                dateOfBirth: string, profession: string,
                marriageState: string): Observable<Patient> {
   const patientValues = new FormData();
    patientValues.set('userId', userId);
    patientValues.set('firstName', firstName);
    patientValues.set('lastName', lastName);
    patientValues.set('email', email);
    patientValues.set('phoneNumber', phoneNumber);
    patientValues.set('address', address);
    patientValues.set('dateOfBirth', dateOfBirth);
    patientValues.set('profession', profession);
    patientValues.set('marriageState', marriageState);



    return this.http.post<Patient>('http://localhost:8080/api/patient/update', patientValues );
  }

  searchPatients(keywords: string, doctorID: string): Observable<Patient[]> {
    return this.http.get<Patient[]>('http://localhost:8080/api/search/patients/' + keywords + '/' + doctorID);

  }

  getSelectedPatient(patientId: string): Observable<Patient> {
    return this.http.get<Patient>('http://localhost:8080/api/patient/' + patientId);
  }


  addVaccineToPatient(userId: string, name: string, dateOfReceipt: string): Observable<Vaccine> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    const vaccineParams = new FormData();
    vaccineParams.set('name', name);
    vaccineParams.set('dateOfReceipt', dateOfReceipt);

    return this.http.post<Vaccine>('http://localhost:8080/api/patient/' + userId + '/addVaccine', vaccineParams);

  }

  addNewExamination(userId: string, diagnosisAtMKB: string, laboratory_Finding: boolean, RTC_Finding: boolean, EHO_Finding: boolean,
                    computed_Tomography: boolean, magnetic_Resonance: boolean, sent_To_A_specialist: boolean, illness: boolean,
                    bandage: boolean, antibody_Prophylaxis: boolean, typeOfTherapy: string, dateOfExamination: string ,
                    medicines: Medicine[]): Observable<HealthExamination> {


    const examinationParams = {
      'diagnosisAtMKB' : diagnosisAtMKB,
      'laboratory_Finding' : JSON.stringify(laboratory_Finding),
      'rtc_Finding' : JSON.stringify(RTC_Finding),
      'eho_Finding' : JSON.stringify(EHO_Finding),
      'computed_Tomography' : JSON.stringify(computed_Tomography),
      'magnetic_Resonance': JSON.stringify(magnetic_Resonance),
      'sent_To_A_specialist':  JSON.stringify(sent_To_A_specialist),
      'illness': JSON.stringify(illness),
      'bandage': JSON.stringify(bandage),
      'antibody_Prophylaxis': JSON.stringify(antibody_Prophylaxis),
      'typeOfTherapy': typeOfTherapy,
      'dateOfExamination': dateOfExamination,
      'medicines' : medicines
    };

    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    return this.http.post<HealthExamination>('http://localhost:8080/api/patient/' + userId + '/addExamination', examinationParams, httpOptions);
  }


  getMedicinesForExamination(userId: string, dateOfExamination: string): Observable<Medicine[]> {
    return this.http.get<Medicine[]>('http://localhost:8080/api/patient/' + userId + '/examination/' + dateOfExamination + '/medicines');

  }

}
