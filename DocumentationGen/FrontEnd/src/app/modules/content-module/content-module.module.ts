import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContentComponent } from './components/content/content.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
	declarations: [
		ContentComponent
	],
	imports: [
		CommonModule,
		RouterModule.forChild(
			[
				{ path: '', component: ContentComponent }
			]
		),
		MatGridListModule,
		MatCardModule,
		MatButtonModule,
		FontAwesomeModule
	]
})
export class ContentModule { }
