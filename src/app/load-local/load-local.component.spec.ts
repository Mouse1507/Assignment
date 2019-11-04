import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadLocalComponent } from './load-local.component';

describe('LoadLocalComponent', () => {
  let component: LoadLocalComponent;
  let fixture: ComponentFixture<LoadLocalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadLocalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
