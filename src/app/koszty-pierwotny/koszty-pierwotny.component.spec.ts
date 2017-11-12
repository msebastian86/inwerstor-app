import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KosztyPierwotnyComponent } from './koszty-pierwotny.component';

describe('KosztyPierwotnyComponent', () => {
  let component: KosztyPierwotnyComponent;
  let fixture: ComponentFixture<KosztyPierwotnyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KosztyPierwotnyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KosztyPierwotnyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
