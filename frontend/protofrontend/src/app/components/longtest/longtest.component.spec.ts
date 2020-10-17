import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LongtestComponent } from './longtest.component';

describe('LongtestComponent', () => {
  let component: LongtestComponent;
  let fixture: ComponentFixture<LongtestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LongtestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LongtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
