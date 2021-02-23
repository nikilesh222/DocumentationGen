import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { ComposeMessageComponent } from './compose-message/compose-message.component';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { AuthorizeGuard } from '../api-authorization/authorize.guard';
import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';

const appRoutes: Routes = [
  // {
  //   path: 'compose',
  //   component: ComposeMessageComponent,
  //   outlet: 'popup'
  // },
  {
    path: 'authentication',
    loadChildren: () => import('../api-authorization/api-authorization.module').then(m => m.ApiAuthorizationModule)
  },
  {
    path: 'html',
    loadChildren: () => import('./modules/html-viewer/html-viewer.module').then(m => m.HtmlViewerModule)
  },
  // {
  //   path: 'router-doc',
  //   loadChildren: () => import('./angular/docs/router-doc-module.module').then(m => m.RouterDocModule)
  // },
  // {
  //   path: 'crisis-center',
  //   loadChildren: () => import('./crisis-center/crisis-center.module').then(m => m.CrisisCenterModule),
  //   data: { preload: true }
  // },
  // { path: '',   redirectTo: '/superheroes', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false, // <-- debugging purposes only
        preloadingStrategy: SelectivePreloadingStrategyService,
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
