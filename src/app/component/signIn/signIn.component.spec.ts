import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationCompte } from './signIn.component';

describe('CreationCompte', () => {
  let component: CreationCompte;
  let fixture: ComponentFixture<CreationCompte>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationCompte ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreationCompte);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
