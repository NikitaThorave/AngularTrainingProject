import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoDynamicCompComponent } from './demo-dynamic-comp.component';

describe('DemoDynamicCompComponent', () => {
  let component: DemoDynamicCompComponent;
  let fixture: ComponentFixture<DemoDynamicCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoDynamicCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoDynamicCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
