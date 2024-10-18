import { ComponentFixture, TestBed } from '@angular/core/testing';

import { addTeamComponent } from './addTeam.component';

describe('CoachComponent', () => {
  let component: addTeamComponent;
  let fixture: ComponentFixture<addTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [addTeamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(addTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
