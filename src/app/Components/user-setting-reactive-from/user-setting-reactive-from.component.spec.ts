import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSettingReactiveFromComponent } from './user-setting-reactive-from.component';

describe('UserSettingReactiveFromComponent', () => {
  let component: UserSettingReactiveFromComponent;
  let fixture: ComponentFixture<UserSettingReactiveFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSettingReactiveFromComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSettingReactiveFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
