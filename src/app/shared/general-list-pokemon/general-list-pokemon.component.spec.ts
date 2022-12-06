import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralListPokemonComponent } from './general-list-pokemon.component';

describe('GeneralListPokemonComponent', () => {
  let component: GeneralListPokemonComponent;
  let fixture: ComponentFixture<GeneralListPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralListPokemonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralListPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
