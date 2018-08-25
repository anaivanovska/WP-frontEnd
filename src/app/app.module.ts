import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { EditPatientComponent } from './components/PatientsComponents/edit-patient/edit-patient.component';
import { AddNewPatientComponent } from './components/PatientsComponents/add-new-patient/add-new-patient.component';
import { EditFamilyDoctorComponent } from './components/FamilyDoctorComponents/edit-family-doctor/edit-family-doctor.component';
import { AddNewFamilyDoctorComponent } from './components/FamilyDoctorComponents/add-new-family-doctor/add-new-family-doctor.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { PatientInfoComponent } from './components/PatientsComponents/patient-info/patient-info.component';
import { FamilyDoctorInfoComponent } from './components/FamilyDoctorComponents/family-doctor-info/family-doctor-info.component';
import { LoginComponent } from './components/login/login.component';
import {FamilyDoctorManagementService} from './services/family-doctor-management.service';
import {PatientManagementService} from './services/patient-management.service';
import {DatePipe} from '@angular/common';
import {Interceptor} from './interceptor';
import {TokenStorage} from './tokenStorage';
import { ShowExaminationsComponent } from './components/PatientsComponents/show-examinations/show-examinations.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { ShowVaccinesComponent } from './components/PatientsComponents/show-vaccines/show-vaccines.component';
import { ShowPatientsComponent } from './components/FamilyDoctorComponents/show-patients/show-patients.component';
import { ShowSelectedPatientProfileComponent } from './components/FamilyDoctorComponents/show-selected-patient-profile/show-selected-patient-profile.component';
import { MenuDoctorComponent } from './components/FamilyDoctorComponents/menu-doctor/menu-doctor.component';
import { MenuPatientComponent } from './components/PatientsComponents/menu-patient/menu-patient.component';
import { HomeDoctorComponent } from './components/FamilyDoctorComponents/home-doctor/home-doctor.component';
import { SearchComponent } from './components/PatientsComponents/search/search.component';
import { HomePatientComponent } from './components/PatientsComponents/home-patient/home-patient.component';
import { HomeAdminComponent } from './components/AdminComponents/home-admin/home-admin.component';
import { MenuAdminComponent } from './components/AdminComponents/menu-admin/menu-admin.component';
import {AlertComponent} from './components/alerts/alert.component';
import {AlertService} from './services/alert.service';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import {UserManagementService} from './services/user-management.service';
import { AddNewExaminationComponent } from './components/FamilyDoctorComponents/add-new-examination/add-new-examination.component';
import { AddNewVaccineComponent } from './components/FamilyDoctorComponents/add-new-vaccine/add-new-vaccine.component';
import { ShowTherapyComponent } from './components/PatientsComponents/show-therapy/show-therapy.component';

const routes: Routes =  [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'patient/:userId/home',
    component: HomePatientComponent
  },
  {
    path: 'patient/:userId/myProfile',
    component: PatientInfoComponent
  },
  {
    path: 'patient/:userId/editMyProfile',
    component: EditPatientComponent
  },

  {
    path: 'patient/:userId/examinations',
    component: ShowExaminationsComponent
  },
  {
    path: 'patient/:userId/examinations/:dateOfExamination/therapy',
    component: ShowTherapyComponent
  },
  {
    path: 'patient/:userId/vaccines',
    component: ShowVaccinesComponent
  },
  {
    path: 'patient/:userId/changePassword',
    component: ChangePasswordComponent
  },
  {
    path: 'familyDoctor/:userId/myProfile',
    component: FamilyDoctorInfoComponent
  },
  {
    path: 'familyDoctor/:userId/home',
    component: HomeDoctorComponent
  },
  {
    path: 'familyDoctor/:userId/editMyProfile',
    component: EditFamilyDoctorComponent
  },
  {
    path: 'familyDoctor/:userId/patients',
    component: ShowPatientsComponent
  },
  {
    path: 'familyDoctor/:userId/patients/:patientId',
    component: ShowSelectedPatientProfileComponent
  },
  {
    path: 'familyDoctor/:userId/patients/:patientId/examinations',
    component: ShowExaminationsComponent
  },
  {
    path: 'familyDoctor/:userId/patients/:patientId/examinations/:dateOfExamination/therapy',
    component: ShowTherapyComponent
  },
  {
    path: 'familyDoctor/:userId/patients/:patientId/vaccines',
    component: ShowVaccinesComponent
  },
  {
    path: 'familyDoctor/:userId/addPatient',
    component: AddNewPatientComponent
  },
  {
    path: 'familyDoctor/:userId/search',
    component: SearchComponent
  },
  {
    path: 'familyDoctor/:userId/changePassword',
    component: ChangePasswordComponent
  },
  {
    path: 'familyDoctor/:userId/patients/:patientId/vaccines/addNew',
    component: AddNewVaccineComponent
  },
  {
    path: 'familyDoctor/:userId/patients/:patientId/examinations/addNew',
    component: AddNewExaminationComponent
  },
  {
    path: 'admin/home',
    component: HomeAdminComponent
  },
  {
    path: 'admin/addFamilyDoctor',
    component: AddNewFamilyDoctorComponent
  }
  ];


@NgModule({
  declarations: [
    AppComponent,
    EditPatientComponent,
    AddNewPatientComponent,
    EditFamilyDoctorComponent,
    AddNewFamilyDoctorComponent,
    PatientInfoComponent,
    FamilyDoctorInfoComponent,
    LoginComponent,
    ShowExaminationsComponent,
    ShowVaccinesComponent,
    ShowPatientsComponent,
    ShowSelectedPatientProfileComponent,
    MenuDoctorComponent,
    MenuPatientComponent,
    HomeDoctorComponent,
    SearchComponent,
    HomePatientComponent,
    HomeAdminComponent,
    MenuAdminComponent,
    AlertComponent,
    ChangePasswordComponent,
    AddNewExaminationComponent,
    AddNewVaccineComponent,
    ShowTherapyComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  exports: [ RouterModule ],
  providers: [FamilyDoctorManagementService, PatientManagementService, DatePipe, UserManagementService,
    TokenStorage, AlertService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
