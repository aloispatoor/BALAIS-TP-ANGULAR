import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'balais-brosse',
    loadChildren: () =>
      import('./balais-brosse/balais-brosse.module').then((m) => m.BalaisBrosseModule),
  },
  {
    path: 'balais-swiffer',
    loadChildren: () =>
      import('./balais-swiffer/balais-swiffer.module').then((m) => m.BalaisSwifferModule),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./page-not-found/page-not-found.module').then(
        (m) => m.PageNotFoundModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
