import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { Ui3Module } from '../ui3/ui3.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule, RouterModule,
  ],
  exports: [
    Ui3Module,
    HeaderComponent,
    FooterComponent,
  ]
})
export class CoreModule { }
