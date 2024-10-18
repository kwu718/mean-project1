import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerReactiveFormComponent } from './player-reactive-form.component';

describe('PlayerReactiveFormComponent', () => {
  let component: PlayerReactiveFormComponent;
  let fixture: ComponentFixture<PlayerReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerReactiveFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
