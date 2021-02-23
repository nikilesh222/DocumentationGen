import { HeaderComponent } from './modules/shared-module/components/header/header.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '',
    component: HeaderComponent,
    children:[
      {
        path: 'content',
        loadChildren: () => import('./modules/content-module/content-module.module').then(m => m.ContentModule)
      }   
    ]
  },
  {
    path: 'authentication',
    loadChildren: () => import('../api-authorization/api-authorization.module').then(m => m.ApiAuthorizationModule)
  }
  // {
  //   path: 'shell',
  //   loadChildren: () => import('./modules/shared-module/shared-module.module').then(m => m.SharedModule)
  // },
  // {
  //   path: 'content',
  //   loadChildren: () => import('./modules/content-module/content-module.module').then(m => m.ContentModule)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
