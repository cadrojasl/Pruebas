import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriferiaComponent } from './periferia.component';

describe('PeriferiaComponent', () => {
  let component: PeriferiaComponent;
  let fixture: ComponentFixture<PeriferiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeriferiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PeriferiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
