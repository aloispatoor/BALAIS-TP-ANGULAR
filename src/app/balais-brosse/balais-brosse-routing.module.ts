import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAddBalaisBrosseComponent } from './pages/page-add-balais-brosse/page-add-balais-brosse.component';
import { PageDeleteBalaisBrosseComponent } from './pages/page-delete-balais-brosse/page-delete-balais-brosse.component';
import { PageEditBalaisBrosseComponent } from './pages/page-edit-balais-brosse/page-edit-balais-brosse.component';
import { PageListBalaisBrosseComponent } from './pages/page-list-balais-brosse/page-list-balais-brosse.component';

const routes: Routes = [
  { path: '', component: PageListBalaisBrosseComponent },
  { path: 'add', component: PageAddBalaisBrosseComponent },
  { path: 'edit', component: PageEditBalaisBrosseComponent },
  { path: 'delete', component: PageDeleteBalaisBrosseComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientsRoutingModule {}
