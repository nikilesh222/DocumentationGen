import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LandingComponent } from "./components/landing.component";

@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    RouterModule.forChild([
      { path: 'content-landing', component: LandingComponent }
    ]),
  ]
})
export class ContentViewModule { }
