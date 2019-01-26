import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AviableComponent } from './aviable.component';

describe('AviableComponent', () => {
  let component: AviableComponent;
  let fixture: ComponentFixture<AviableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AviableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AviableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
