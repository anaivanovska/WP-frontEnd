import {HealthExamination} from './healthExamination';

export class Medicine {
  name: string;
  quantity: number;
  typeOfReception: string;
  examination: HealthExamination;

  constructor(name: string, quantity: number, typeOfReception: string) {
    this.name = name;
    this.quantity = quantity;
    this.typeOfReception = typeOfReception;
  }
}
