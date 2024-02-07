import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortaVagasComponent } from './porta-vagas.component';

describe('PortaVagasComponent', () => {
  let component: PortaVagasComponent;
  let fixture: ComponentFixture<PortaVagasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortaVagasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortaVagasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
