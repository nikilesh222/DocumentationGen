import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { MatSelectModule } from '@angular/material/select';

import { HeroesRoutingModule } from './html-viewer-routing.module';
import { HtmlLandingComponent } from './components/landing-component/html-landing.component';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatSelectModule,
    MatFormFieldModule,
    HeroesRoutingModule
  ],
  declarations: [
    HtmlLandingComponent
  ]
})
export class HtmlViewerModule {}
