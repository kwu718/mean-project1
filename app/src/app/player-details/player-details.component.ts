import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Player } from '../models/player';
import { HttpService } from '../services/http.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-player-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './player-details.component.html',
  styleUrl: './player-details.component.css'
})
export class PlayerDetailsComponent {
  constructor(private route: ActivatedRoute, private httpService: HttpService){
      this.getPlayerById();
  }

player: Player = new Player(0, '', '', 0, 0, 0, '');
team: String = 'No Team';


playerFirstNameUpdate: string = '';
playerLastNameUpdate: string = '';
ageUpdate: number = 0;
heightFeetUpdate: number = 0;
heightInchUpdate: number = 0;
emailUpdate: number = 0;

updatePlayer(){
  this.httpService.getPlayerById(this.route.snapshot.params['id']).subscribe({
    next: data => {
      if(data.body){
        let temp = data.body;
        temp.firstName = this.playerFirstNameUpdate;
        temp.lastName = this.playerLastNameUpdate;
        temp.age = this.ageUpdate;
        temp.height_feet = this.heightFeetUpdate;
        temp.height_inch = this.heightInchUpdate;
        temp.email = this.emailUpdate;
        this.httpService.updatePlayer(this.route.snapshot.params['id'], temp).subscribe(data => {
          this.getPlayerById();
        })
      }
    }
  })
}
getPlayerById(){
  this.httpService.getPlayerById(this.route.snapshot.params['id']).subscribe({
    next: data => {
      if(data.body){
        if(data.body.team != null)
          this.team = data.body.team.teamName;
          this.player = new Player(data.body.id, data.body.firstName, data.body.lastName,
            data.body.age, data.body.height_feet, data.body.height_inch, data.body.email);
      }
        
    }
  });
 }
}
