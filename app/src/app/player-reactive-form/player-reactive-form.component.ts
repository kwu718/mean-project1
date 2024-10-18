import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Player } from '../models/player';
@Component({
  selector: 'app-player-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './player-reactive-form.component.html',
  styleUrl: './player-reactive-form.component.css'
})
export class PlayerReactiveFormComponent {
  @Output() createPlayerEvent = new EventEmitter<Player>();

  createForm: FormGroup;

  constructor(){
    this.createForm = new FormGroup({
      createFirstName: new FormControl('', [ Validators.required, Validators.maxLength(32) ]),
      createLastName: new FormControl('', [ Validators.required, Validators.maxLength(32) ]),
      createAge: new FormControl('', [ Validators.required, Validators.max(1000)]),
      createHeightFeet: new FormControl('', [ Validators.required, Validators.max(100) ]), 
      createHeightInch: new FormControl('', [ Validators.required, Validators.max(12)]),
      createEmail: new FormControl('', [ Validators.required, Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')]),
    })
  }

  get createFirstName() {
    return this.createForm.get('createFirstName');
  }

  get createLastName() {
    return this.createForm.get('createLastName');
  }

  get createAge() {
    return this.createForm.get('createAge');
  }

  get createHeightFeet() {
    return this.createForm.get('createHeightFeet');
  }

  get createHeightInch() {
    return this.createForm.get('createHeightInch');
  }

  get createEmail() {
    return this.createForm.get('createEmail');
  }

  resetCreateForm() {
    this.createForm.reset();
  }

  submitCreateForm(){
    this.createPlayerEvent.emit(new Player(0, this.createFirstName?.value, this.createLastName?.value, this.createAge?.value,
      this.createHeightFeet?.value, this.createHeightInch?.value, this.createEmail?.value))
    this.resetCreateForm();
  }

}
