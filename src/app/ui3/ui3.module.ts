import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ui3Component } from './components/ui3.component';


@NgModule({
  declarations: [Ui3Component],
  imports: [CommonModule],
  exports: [Ui3Component],
})
export class Ui3Module { }
