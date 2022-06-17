import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmsLandingComponent } from './sms-landing/sms-landing.component';
import { RouterModule } from '@angular/router';
import { SwiperModule } from "swiper/angular";


@NgModule({
  declarations: [
    SmsLandingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(
      [
        { path: '', component: SmsLandingComponent }
      ]
    ),
    SwiperModule
  ]
})
export class SmsOverviewModule { }
