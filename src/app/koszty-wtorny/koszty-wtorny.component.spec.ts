import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KosztyWtornyComponent } from './koszty-wtorny.component';

describe('KosztyWtornyComponent', () => {
  let component: KosztyWtornyComponent;
  let fixture: ComponentFixture<KosztyWtornyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KosztyWtornyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KosztyWtornyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
