import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriferiaResumenComponent } from './periferia-resumen.component';

describe('PeriferiaResumenComponent', () => {
  let component: PeriferiaResumenComponent;
  let fixture: ComponentFixture<PeriferiaResumenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeriferiaResumenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PeriferiaResumenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
