import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Team } from '../models/team';
import { Coach } from '../models/coach';
@Component({
  selector: 'app-team-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './team-reactive-form.component.html',
  styleUrl: './team-reactive-form.component.css'
})
export class TeamReactiveFormComponent {
  @Output() createTeamEvent = new EventEmitter<Team>();
  createForm: FormGroup;

  constructor(){
    this.createForm = new FormGroup({
      createTeamName: new FormControl('', [ Validators.required, Validators.maxLength(32)]),
      createCoachFirstName: new FormControl('', [ Validators.required, Validators.maxLength(32), Validators.pattern('^[a-zA-Z \-\']+')]),
      createCoachLastName: new FormControl('', [ Validators.required, Validators.maxLength(32), Validators.pattern('^[a-zA-Z \-\']+')]),
    })
  }
  get createTeamName() {
    return this.createForm.get('createTeamName');
  }

  get createCoachFirstName() {
    return this.createForm.get('createCoachFirstName');
  }

  get createCoachLastName() {
    return this.createForm.get('createCoachLastName');
  }

  resetCreateForm() {
    this.createForm.reset();
  }

  submitCreateForm(){
    this.createTeamEvent.emit(new Team(0, this.createTeamName?.value, new Coach(this.createCoachFirstName?.value, this.createCoachLastName?.value)));
    this.resetCreateForm();
  }
}
