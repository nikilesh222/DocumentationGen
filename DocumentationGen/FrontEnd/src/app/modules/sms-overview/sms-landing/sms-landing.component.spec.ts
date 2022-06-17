import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsLandingComponent } from './sms-landing.component';

describe('SmsLandingComponent', () => {
  let component: SmsLandingComponent;
  let fixture: ComponentFixture<SmsLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmsLandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmsLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
