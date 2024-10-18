import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamReactiveFormComponent } from './team-reactive-form.component';

describe('TeamReactiveFormComponent', () => {
  let component: TeamReactiveFormComponent;
  let fixture: ComponentFixture<TeamReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamReactiveFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
