import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {PatientManagementService} from '../../../services/patient-management.service';
import {ActivatedRoute} from '@angular/router';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Location} from '@angular/common';
import {Medicine} from "../../../model/medicine";
import {isNullOrUndefined} from "util";

@Component({
  selector: 'app-add-new-examination',
  templateUrl: './add-new-examination.component.html',
  styleUrls: ['./add-new-examination.component.css']
})
export class AddNewExaminationComponent implements OnInit {


  newExaminationForm: FormGroup;
  constructor(private patientService: PatientManagementService,
              private activeRoute: ActivatedRoute,
              private formBuilder: FormBuilder,
              private location: Location) { }

  ngOnInit() {
    this.newExaminationForm = this.formBuilder.group({
      diagnosisAtMKB: [''],
      laboratory_Finding: [false],
      RTC_Finding: [false],
      EHO_Finding: [false],
      computed_Tomography: [false],
      magnetic_Resonance: [false],
      sent_To_A_specialist: [false],
      illness: [false],
      bandage: [false],
      antibody_Prophylaxis: [false],
      typeOfTherapy: ['', [Validators.required]],
      dateOfExamination: ['', [Validators.required]],
      medicines: this.formBuilder.array([])
    });
  }


  save() {
    const formValues = this.newExaminationForm.value;
    const medicines: Medicine[]  = [];
    const medicinesArray = this.getFormArray();
    const userId = this.activeRoute.snapshot.paramMap.get('patientId');

    medicinesArray.controls.forEach((medicineGroup) => {
      const medicineValues = medicineGroup.value;
      const medicine = new Medicine(medicineValues.medicineName, medicineValues.quantity, medicineValues.typeOfReception);
      medicines.push(medicine);
    });

    this.patientService.addNewExamination(userId, formValues.diagnosisAtMKB, formValues.laboratory_Finding, formValues.RTC_Finding, formValues.EHO_Finding,
                                          formValues.computed_Tomography, formValues.magnetic_Resonance, formValues.sent_To_A_specialist, formValues.illness, formValues.bandage,
                                          formValues.antibody_Prophylaxis, formValues.typeOfTherapy, formValues.dateOfExamination, medicines)
                                          .subscribe(examination => {
                                            if(isNullOrUndefined(examination)){
                                              alert('Something went wrong...');
                                            }else {
                                              this.location.back();
                                            }
                                                });

  }


  goBack() {
    this.location.back();
  }

  addFormControl() {
    return this.formBuilder.group({
      medicineName: [''],
      quantity: ['', Validators.pattern('[1-9]{1,}[0-9]*')],
      typeOfReception: ['']
    });
  }
  addInput() {
    const medicinesArray = this.getFormArray();
    medicinesArray.push(this.addFormControl());
  }


  getFormArray() {
    return <FormArray>this.newExaminationForm.get('medicines');
  }
}
