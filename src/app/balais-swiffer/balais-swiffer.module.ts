import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageListBalaisSwifferComponent } from './pages/page-list-balais-swiffer/page-list-balais-swiffer.component';
import { PageAddBalaisSwifferComponent } from './pages/page-add-balais-swiffer/page-add-balais-swiffer.component';
import { PageEditBalaisSwifferComponent } from './pages/page-edit-balais-swiffer/page-edit-balais-swiffer.component';
import { PageDeleteBalaisSwifferComponent } from './pages/page-delete-balais-swiffer/page-delete-balais-swiffer.component';



@NgModule({
  declarations: [
    PageListBalaisSwifferComponent,
    PageAddBalaisSwifferComponent,
    PageEditBalaisSwifferComponent,
    PageDeleteBalaisSwifferComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BalaisSwifferModule { }
