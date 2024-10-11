import { Component } from '@angular/core';
import { CoachComponent } from '../coach/coach.component';
import { addPlayerComponent } from '../addplayer/addplayer.component';
import { TeamComponent } from '../team/team.component';
import { Player } from '../models/player';
import {Team} from '../models/team'
import { PlayerComponent } from '../player/player.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [addPlayerComponent, CoachComponent, TeamComponent, PlayerComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

  p1 = new Player('LeBron', 'James', 39, 6, 8, 'lbj@gmail.com')
  p2 = new Player('Stephen', 'Curry', 36, 6, 3, 'curry@gmail.com')
  p3 = new Player('Kevin', 'Durant', 36, 6, 10, 'kd@gmail.com')
  players_1: Player[] = [this.p1, this.p2, this.p3]
  team_1: Team = new Team('Team Old Guys', this.players_1);

  p4 = new Player('Jayson', 'Tatum', 26, 6, 9, 'tatum@gmail.com')
  p5 = new Player('Anthony', 'Edwards', 23, 6, 4, 'antman@gmail.com')
  p6 = new Player('Luka', 'Doncic', 25, 6, 7, 'luka@gmail.com')
  players_2: Player[] = [this.p4, this.p5, this.p6]
  team_2: Team = new Team('Team Young Guys', this.players_2);

  teams: Team[] = [this.team_1, this.team_2];

}
