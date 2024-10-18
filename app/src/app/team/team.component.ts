import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Team } from '../models/team';
import { PlayerComponent } from '../player/player.component';
import { CoachComponent } from '../coach/coach.component';
import { Coach } from '../models/coach';
import { Player } from '../models/player';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [PlayerComponent, CoachComponent],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {
  @Input() team: Team = new Team(0, '', new Coach('', ''));


  @Output() deleteTeamEvent = new EventEmitter<number>;

  constructor(private httpService: HttpService){
  }
  players: Player[] = [];

  getPlayers(){
  
    this.httpService.getPlayersByTeam(this.team.id).subscribe(data => {
      let tempPlayers: Player[] = [];
      console.log(data.body);
        if(data.body)
          for(let p of data.body){
            tempPlayers.push(new Player(p.id, p.firstName, p.lastName, p.age, p.height_feet, p.height_inch, p.email))
          }
            this.players = tempPlayers;
      })
  }
  deleteTeam(){
    this.deleteTeamEvent.emit(this.team.id);
  }

  deletePlayer(bool: boolean){

  }
}
