import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAddBalaisSwifferComponent } from './pages/page-add-balais-swiffer/page-add-balais-swiffer.component';
import { PageDeleteBalaisSwifferComponent } from './pages/page-delete-balais-swiffer/page-delete-balais-swiffer.component';
import { PageEditBalaisSwifferComponent } from './pages/page-edit-balais-swiffer/page-edit-balais-swiffer.component';
import { PageListBalaisSwifferComponent } from './pages/page-list-balais-swiffer/page-list-balais-swiffer.component';

const routes: Routes = [
  { path: '', component: PageListBalaisSwifferComponent },
  { path: 'add', component: PageAddBalaisSwifferComponent },
  { path: 'edit', component: PageEditBalaisSwifferComponent },
  { path: 'delete', component: PageDeleteBalaisSwifferComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientsRoutingModule {}
