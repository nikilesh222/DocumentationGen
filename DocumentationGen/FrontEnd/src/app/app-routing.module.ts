import { AuthorizeGuard } from './../api-authorization/authorize.guard';
import { HeaderComponent } from './modules/shared-module/components/header/header.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '',
    component: HeaderComponent,
    children:[
      {
        path: '',
        loadChildren: () => import('./modules/landing-module/landing-module.module').then(m => m.LandingModule)
      },
      {
        path: 'content',
        loadChildren: () => import('./modules/content-module/content-module.module').then(m => m.ContentModule),
        canActivate: [AuthorizeGuard]
      },
      {
        path: 'html5',
        loadChildren: () => import('./modules/html-module/html-module.module').then(m => m.HtmlModuleModule),
        canActivate: [AuthorizeGuard]
      },
      {
        path: 'sql',
        loadChildren: () => import('./modules/sql-module/sql-module.module').then(m => m.SqlModule),
        // canActivate: [AuthorizeGuard]
      }
    ]
  },
  {
    path: 'authentication',
    loadChildren: () => import('../api-authorization/api-authorization.module').then(m => m.ApiAuthorizationModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
