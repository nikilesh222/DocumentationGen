import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HtmlLandingComponent } from './components/landing-component/html-landing.component';

const htmlRoutes: Routes = [
  { path: '', redirectTo: '/html/landing' },
  { path: 'landing',  component: HtmlLandingComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(htmlRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HeroesRoutingModule { }
