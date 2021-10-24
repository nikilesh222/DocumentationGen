import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlLandingComponent } from './sql-landing.component';

describe('SqlLandingComponent', () => {
  let component: SqlLandingComponent;
  let fixture: ComponentFixture<SqlLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SqlLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SqlLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
