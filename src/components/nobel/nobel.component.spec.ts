import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NobelComponent } from './nobel.component';

describe('NobelComponent', () => {
  let component: NobelComponent;
  let fixture: ComponentFixture<NobelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NobelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NobelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
