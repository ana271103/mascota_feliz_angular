import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorreoPredeterminadoComponent } from './correo-predeterminado.component';

describe('CorreoPredeterminadoComponent', () => {
  let component: CorreoPredeterminadoComponent;
  let fixture: ComponentFixture<CorreoPredeterminadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorreoPredeterminadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorreoPredeterminadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
