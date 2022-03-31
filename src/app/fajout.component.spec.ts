import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FajoutComponent } from './fajout.component';

describe('FajoutComponent', () => {
  let component: FajoutComponent;
  let fixture: ComponentFixture<FajoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FajoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FajoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
