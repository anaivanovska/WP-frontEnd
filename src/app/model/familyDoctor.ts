import {User} from './user';

export class FamilyDoctor extends User {

  public agreement_with_FZO: boolean;
  public speciality: string;
  public workTime: string;
  public deputyFamilyDoctor: FamilyDoctor;

}
