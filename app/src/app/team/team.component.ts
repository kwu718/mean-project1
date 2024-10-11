import { Component, Input } from '@angular/core';
import { Team } from '../models/team';
import { PlayerComponent } from '../player/player.component';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [PlayerComponent],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {
  @Input() team: Team = new Team('', []);
}
