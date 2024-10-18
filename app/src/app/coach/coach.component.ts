import { Component, Input } from '@angular/core';
import { Coach } from '../models/coach';

@Component({
  selector: 'app-coach',
  standalone: true,
  imports: [],
  templateUrl: './coach.component.html',
  styleUrl: './coach.component.css'
})
export class CoachComponent {
  @Input() coach: Coach = new Coach('', '');
}
