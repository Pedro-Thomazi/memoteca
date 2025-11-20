import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirPensamentos } from './excluir-pensamentos';

describe('ExcluirPensamentos', () => {
  let component: ExcluirPensamentos;
  let fixture: ComponentFixture<ExcluirPensamentos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExcluirPensamentos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcluirPensamentos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
