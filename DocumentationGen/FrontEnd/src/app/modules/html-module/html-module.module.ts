import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HtmlLandingComponent } from './components/html-landing/html-landing.component';
import { RouterModule } from '@angular/router';



@NgModule({
	declarations: [HtmlLandingComponent],
	imports: [
		CommonModule,
		RouterModule.forChild(
			[
				{ path: '', component: HtmlLandingComponent }
			]
		),
	]
})
export class HtmlModuleModule { }
