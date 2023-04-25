import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarComparatorComponent } from './ear-comparator.component';

describe('EarComparatorComponent', () => {
  let component: EarComparatorComponent;
  let fixture: ComponentFixture<EarComparatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EarComparatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EarComparatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
