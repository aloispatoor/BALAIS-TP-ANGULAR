import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageListBalaisBrosseComponent } from './pages/page-list-balais-brosse/page-list-balais-brosse.component';
import { PageAddBalaisBrosseComponent } from './pages/page-add-balais-brosse/page-add-balais-brosse.component';
import { PageEditBalaisBrosseComponent } from './pages/page-edit-balais-brosse/page-edit-balais-brosse.component';
import { PageDeleteBalaisBrosseComponent } from './pages/page-delete-balais-brosse/page-delete-balais-brosse.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
    declarations: [
        PageListBalaisBrosseComponent,
        PageAddBalaisBrosseComponent,
        PageEditBalaisBrosseComponent,
        PageDeleteBalaisBrosseComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        SharedModule,
    ]
})
export class BalaisBrosseModule { }
