import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Player } from '../models/player';
import { Router } from '@angular/router';
import { HttpService } from '../services/http.service';
import { Team } from '../models/team';
import { Coach } from '../models/coach';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [],
  templateUrl: './player.component.html',
  styleUrl: './player.component.css'
})
export class PlayerComponent {
  constructor(private router: Router, private httpService: HttpService){
    this.getAllTeams();
  }
  @Input() player: Player = new Player(0, '', '', 0, 0, 0, '');

  @Output() deletePlayerEvent = new EventEmitter<boolean>;

  teams: Team[] = [];

  limit: number = 5;

  getAllTeams(){
    this.httpService.getAllTeams().subscribe(data =>{
      let tempTeam: Team[] = [];
      if(data.body)
        for(let t of data.body){
          let newTeam = new Team(t.id, t.teamName, new Coach(t.coachFirstName, t.coachLastName));
          tempTeam.push(newTeam);
        }
        this.teams = tempTeam;
    })
  }
  deletePlayer(){

    this.httpService.getPlayerById(this.player.id).subscribe(data =>{
      if(data.body)
        if(data.body.team != null){
          let temp = data.body;
          temp.team = null;
          temp.teamId = null;
          this.httpService.updatePlayer(this.player.id, temp).subscribe(data => {
            this.deletePlayerEvent.emit(true);
          })
        }
        else{
          this.httpService.deletePlayer(this.player.id).subscribe(data => {
            this.deletePlayerEvent.emit(true);
          })
        }
    })
  }
  addToTeam(id: number){

    this.httpService.getPlayersByTeam(id).subscribe(data => {
      if(data.body.length < 5){
        this.httpService.getPlayerById(this.player.id).subscribe(data => {
          if(data.body){
            let temp = data.body;
            temp.teamId = id;
            this.httpService.updatePlayer(this.player.id, temp).subscribe(data => {
              this.deletePlayerEvent.emit(true);
            })
          }
         })
      }
      else{
        window.confirm('Capacity Reached');
      }
    })


  }
  showDetails() {
    this.router.navigate([ 'players/' + this.player.id]);
  }
}
