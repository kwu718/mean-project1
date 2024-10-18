import { Component, OnInit} from '@angular/core';
import { addTeamComponent } from '../addTeam/addTeam.component';
import { addPlayerComponent } from '../addplayer/addplayer.component';
import { TeamComponent } from '../team/team.component';
import { Player } from '../models/player';
import {Team} from '../models/team'
import { PlayerComponent } from '../player/player.component';
import { HttpService } from '../services/http.service';
import { CoachComponent } from '../coach/coach.component';
import { Coach } from '../models/coach';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [addPlayerComponent, addTeamComponent, 
    TeamComponent, PlayerComponent, CoachComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent{

    constructor(private httpService: HttpService, private router: Router){
      this.getAllTeams();
      this.getPlayersNoTeam();
    
    }
    teams: Team[] = [];
    players: Player[] = [];
    
    getPlayersNoTeam(){
      this.httpService.getPlayersByTeam('null').subscribe(data => {
        let tempPlayers: Player[] = [];
        if(data.body)
          for(let p of data.body){
            tempPlayers.push(new Player(p.id, p.firstName, p.lastName, p.age, p.height_feet, p.height_inch, p.email))
        }
        this.players = tempPlayers;
      })
    }
    getAllTeams(){
      this.httpService.getAllTeams().subscribe(data => {
        let tempTeam: Team[] = [];
        if(data.body)
            for(let t of data.body){
              let newTeam = new Team(t.id, t.teamName, new Coach(t.coachFirstName, t.coachLastName))
              this.httpService.getPlayersByTeam(t.id).subscribe(data => {
                let tempPlayers: Player[] = [];
                if(data.body)
                  for(let p of data.body){
                    tempPlayers.push(new Player(p.id, p.firstName, p.lastName, p.age, p.height_feet, p.height_inch, p.email))
                }
                newTeam.players = tempPlayers;
              })
               tempTeam.push(newTeam)
          }
          this.teams = tempTeam;
      })
    }

    deleteTeam(id: number){
      if(window.confirm('Confirm Delete')){
        this.httpService.getPlayersByTeam(id).subscribe(data => {
          if((data.body).length > 0){
            for(let p of data.body){
              let temp = p;
              temp.team = null;
              temp.teamId = null;
              console.log(temp);
              this.httpService.updatePlayer(temp.id, temp).subscribe(data => {
                this.httpService.deleteTeam(id).subscribe(data => {
                  this.getAllTeams();
                });
              })
            }
          }
          else{
            this.httpService.deleteTeam(id).subscribe(data => {
              this.getAllTeams();
            });
          }
        })
      }
    }
    deletePlayer(bool: boolean){
      if(bool){
        this.getPlayersNoTeam();
      }
    }

    reroute() {
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['admin'])});
    }
}
