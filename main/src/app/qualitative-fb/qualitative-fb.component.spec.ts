import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QualitativeFbComponent } from './qualitative-fb.component';

describe('QualitativeFbComponent', () => {
  let component: QualitativeFbComponent;
  let fixture: ComponentFixture<QualitativeFbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QualitativeFbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QualitativeFbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
