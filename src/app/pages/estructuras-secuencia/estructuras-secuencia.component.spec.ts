import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstructurasSecuenciaComponent } from './estructuras-secuencia.component';

describe('EstructurasSecuenciaComponent', () => {
  let component: EstructurasSecuenciaComponent;
  let fixture: ComponentFixture<EstructurasSecuenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EstructurasSecuenciaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EstructurasSecuenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
