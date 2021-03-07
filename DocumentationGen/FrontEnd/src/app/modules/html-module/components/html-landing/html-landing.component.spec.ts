import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlLandingComponent } from './html-landing.component';

describe('HtmlLandingComponent', () => {
  let component: HtmlLandingComponent;
  let fixture: ComponentFixture<HtmlLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
