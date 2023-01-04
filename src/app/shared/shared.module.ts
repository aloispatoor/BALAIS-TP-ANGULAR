import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GabaritsModule } from '../gabarits/gabarits.module';
import { ListComponent } from './components/list/list.component';



@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    GabaritsModule,
    ListComponent,
  ]
})
export class SharedModule { }
