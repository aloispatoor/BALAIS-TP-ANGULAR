import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
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
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
