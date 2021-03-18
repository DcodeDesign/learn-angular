import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demos23UploadFichiersComponent } from './demos23-upload-fichiers.component';

describe('Demos23UploadFichiersComponent', () => {
  let component: Demos23UploadFichiersComponent;
  let fixture: ComponentFixture<Demos23UploadFichiersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Demos23UploadFichiersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Demos23UploadFichiersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
