import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-html-landing',
	templateUrl: './html-landing.component.html',
	styleUrls: ['./html-landing.component.scss']
})
export class HtmlLandingComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {

	}

	apply(tag: string) {
		console.log(tag);
	}

}
