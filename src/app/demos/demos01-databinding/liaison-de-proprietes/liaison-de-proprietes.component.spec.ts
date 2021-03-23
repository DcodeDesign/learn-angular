import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiaisonDeProprietesComponent } from './liaison-de-proprietes.component';

describe('LiaisonDeProprietesComponent', () => {
  let component: LiaisonDeProprietesComponent;
  let fixture: ComponentFixture<LiaisonDeProprietesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiaisonDeProprietesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiaisonDeProprietesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
