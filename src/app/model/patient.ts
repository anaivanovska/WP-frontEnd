import {User} from './user';
import {FamilyDoctor} from './familyDoctor';
import {HealthInsurance} from './healthInsurance';

export class Patient extends User {
  dateOfBirth: Date;
  gender: string;
  embg: string;
  profession: string;
  marriageState: string;
  familyDoctor: FamilyDoctor;
  healthInsurance: HealthInsurance;

}
