import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RobotiqueComponent } from './robotique.component';

describe('RobotiqueComponent', () => {
  let component: RobotiqueComponent;
  let fixture: ComponentFixture<RobotiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RobotiqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RobotiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
