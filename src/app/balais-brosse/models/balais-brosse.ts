import { BalaisBrosseI } from "../interfaces/balais-brosse-i";

export class BalaisBrosse implements BalaisBrosseI {
  price!: number;
  name!: string;
  descrption!: string;
  id!: number;

  constructor(obj?: Partial<BalaisBrosse>){
    if(obj){
      Object.assign(this, obj);
    }
  }
}
