import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaritiesComponent } from './rarities.component';

describe('RaritiesComponent', () => {
  let component: RaritiesComponent;
  let fixture: ComponentFixture<RaritiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaritiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaritiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
