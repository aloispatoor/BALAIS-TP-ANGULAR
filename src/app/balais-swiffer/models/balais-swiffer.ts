import { BalaisSwifferI } from "../interfaces/balais-swiffer-i";

export class BalaisSwiffer implements BalaisSwifferI {
  price!: number;
  name!: string;
  descrption!: string;
  id!: number;

  constructor(obj?: Partial<BalaisSwiffer>){
    if(obj){
      Object.assign(this, obj);
    }
  }

}
