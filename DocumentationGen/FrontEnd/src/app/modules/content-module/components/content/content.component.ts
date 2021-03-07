import { Component, OnDestroy, OnInit } from '@angular/core';
import { faHtml5, faCss3, faJs } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit, OnDestroy {

  faHtml5 = faHtml5;
  faCss3 = faCss3;
  faJs = faJs;

  constructor(
  ) {
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
  }

}
