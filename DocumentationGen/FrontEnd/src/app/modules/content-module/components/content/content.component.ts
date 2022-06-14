import { Component, OnDestroy, OnInit } from '@angular/core';
import { faHtml5, faCss3, faJs, faMicrosoft } from '@fortawesome/free-brands-svg-icons';

@Component({
	selector: 'app-content',
	templateUrl: './content.component.html',
	styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit, OnDestroy {

	faHtml5 = faHtml5;
	faCss3 = faCss3;
	faJs = faJs;
	faMicrosoft = faMicrosoft;

	constructor(
	) {
	}

	ngOnDestroy(): void {
	}

	ngOnInit(): void {
	}

}
