import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresaDetalleComponent } from './empresa-detalle.component';

describe('EmpresaDetalleComponent', () => {
  let component: EmpresaDetalleComponent;
  let fixture: ComponentFixture<EmpresaDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpresaDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresaDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
