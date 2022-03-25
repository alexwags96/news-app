import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeopolitiqueComponent } from './geopolitique.component';

describe('GeopolitiqueComponent', () => {
  let component: GeopolitiqueComponent;
  let fixture: ComponentFixture<GeopolitiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeopolitiqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeopolitiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
