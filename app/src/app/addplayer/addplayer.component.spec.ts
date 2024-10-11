import { ComponentFixture, TestBed } from '@angular/core/testing';

import { addPlayerComponent } from './addplayer.component';

describe('PlayerComponent', () => {
  let component: addPlayerComponent;
  let fixture: ComponentFixture<addPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [addPlayerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(addPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
