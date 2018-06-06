import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationviewComponent } from './navigationview.component';

describe('NavigationviewComponent', () => {
  let component: NavigationviewComponent;
  let fixture: ComponentFixture<NavigationviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
