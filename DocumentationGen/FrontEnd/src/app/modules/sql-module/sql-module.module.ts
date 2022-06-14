import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SqlLandingComponent } from './components/sql-landing/sql-landing.component';
import { RouterModule } from '@angular/router';



@NgModule({
	declarations: [SqlLandingComponent],
	imports: [
		CommonModule,
		RouterModule.forChild(
			[
				{ path: '', component: SqlLandingComponent }
			]
		),
	]
})
export class SqlModule { }
