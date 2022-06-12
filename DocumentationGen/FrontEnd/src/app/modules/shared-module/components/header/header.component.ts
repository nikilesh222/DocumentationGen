import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { AuthorizeService } from 'src/api-authorization/authorize.service';
import { map } from 'rxjs/internal/operators/map';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit, OnDestroy {

  public isAuthenticated: Observable<boolean> | undefined;
  public userName: Observable<string | null | undefined> | undefined;
  public solutionsToggle: boolean = false;
  public moreToggle: boolean = false;
  public mobileViewMenu: boolean = false;

  constructor(
    media: MediaMatcher,
    private changeDetectorRef: ChangeDetectorRef,
    private authorizeService: AuthorizeService,
    private router: Router
  ) {
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
    this.isAuthenticated = this.authorizeService.isAuthenticated();
    this.userName = this.authorizeService.getUser().pipe(map(u => u && u.name));
    this.changeDetectorRef.detectChanges();
  }

  navigate(path: string) {
    this.router.navigateByUrl(path, {
      replaceUrl: true
    });
  }

  toggle(elId: string) {
    if (elId == 'Solutions'){
      this.solutionsToggle = !this.solutionsToggle;
    } else if(elId == 'More'){
      this.moreToggle = !this.moreToggle;
    } else if(elId == 'MobileViewMenu'){
      this.mobileViewMenu = !this.mobileViewMenu;
    }
  }

}
